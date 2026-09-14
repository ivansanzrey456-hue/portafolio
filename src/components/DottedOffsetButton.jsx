import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAnimate, useReducedMotion } from "motion/react";

const radiusFromPercent = (w, h, pct) =>
    (Math.min(w, h) / 2) * (Math.max(0, Math.min(100, pct)) / 100);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const borderColorOf = (b) => b?.borderColor ?? "transparent";

const borderBoxOf = (b) => {
    if (!b) return {};
    const { borderColor, ...rest } = b;
    return rest;
};

const DEFAULT_TRANSITION = {
    mass: 1,
    type: "spring",
    damping: 25,
    stiffness: 400,
};

export default function DottedOffsetButton(props) {
    const {
        label = "Descargar CV",
        font = {
            fontSize: 15,
            fontFamily: "Inter",
            fontWeight: 500,
            lineHeight: "1.5em",
        },
        showText = true,
        padding = "10px 20px",
        rounded = 33,
        fill: fillProp,
        textColor: textColorProp,
        colors = {},
        addIcon = false,
        icon = {},
        gap = 8,
        border = {},
        hover = {},
        shadow = {},
        link = "",
        transition = DEFAULT_TRANSITION,
        newTab = false,
        style,
    } = props;

    // Valores calculados combinando defaults con las props recibidas
    const fill = colors.fill ?? fillProp ?? "#043297";
    const textColor = colors.textColor ?? textColorProp ?? "#FFFFFF";
    const restBorderColor = borderColorOf(border);

    const hoverFill = hover.fill ?? colors.hoverFill ?? "#000000";
    const hoverTextColor = hover.textColor ?? colors.hoverTextColor ?? "#FFFFFF";
    const hoverBorderColor = hover.borderColor ?? restBorderColor;
    const hoverRounded = hover.rounded ?? 33;
    const hoverOffsetX = hover.offsetX;
    const hoverOffsetY = hover.offsetY;

    const shadowColor = shadow.color ?? "#00C2BC";
    const shadowSide = shadow.side ?? "right";
    const shadowDistance = shadow.distance ?? 6;

    const legacyDist = Math.max(0, Math.round(shadowDistance));
    const shadowX = Math.round(
        hoverOffsetX ?? (shadowSide === "left" ? -legacyDist : legacyDist)
    );
    const shadowY = Math.round(hoverOffsetY ?? legacyDist);

    const [scope, animate] = useAnimate();

    const [radiusBox, setRadiusBox] = useState({ w: 0, h: 0 });
    useIsoLayoutEffect(() => {
        const el = scope.current;
        if (!el) return;
        const read = () =>
            setRadiusBox((prev) =>
                prev.w === el.offsetWidth && prev.h === el.offsetHeight
                    ? prev
                    : { w: el.offsetWidth, h: el.offsetHeight }
            );
        read();
        const ro = new ResizeObserver(read);
        ro.observe(el);
        return () => ro.disconnect();
    }, [scope]);

    const radiusPx = radiusFromPercent(radiusBox.w, radiusBox.h, rounded);
    const hoverRadiusPx = radiusFromPercent(radiusBox.w, radiusBox.h, hoverRounded);

    const iconRef = useRef(null);
    const hovered = useRef(false);
    const reducedMotion = useReducedMotion();

    const iconColor = icon.color ?? "#FFFFFF";
    const iconHoverColor = icon.hoverColor ?? "#FFFFFF";
    const iconPx = icon.size ?? 18;

    const apply = useCallback(
        (toHover, instant) => {
            if (!scope.current) return;
            const t = instant || reducedMotion ? { duration: 0 } : transition;

            animate(
                scope.current,
                toHover
                    ? {
                          x: -shadowX,
                          y: -shadowY,
                          borderRadius: hoverRadiusPx,
                          backgroundColor: hoverFill,
                          color: hoverTextColor,
                          borderColor: hoverBorderColor,
                          boxShadow: `${shadowX}px ${shadowY}px 0px ${shadowColor}`,
                      }
                    : {
                          x: 0,
                          y: 0,
                          borderRadius: radiusPx,
                          backgroundColor: fill,
                          color: textColor,
                          borderColor: restBorderColor,
                          boxShadow: `0px 0px 0px ${shadowColor}`,
                      },
                t
            );

            if (iconRef.current) {
                animate(
                    iconRef.current,
                    { color: toHover ? iconHoverColor : iconColor },
                    t
                );
            }
        },
        [
            animate, scope, transition, reducedMotion, shadowX, shadowY, shadowColor,
            radiusPx, hoverRadiusPx, fill, hoverFill, textColor, hoverTextColor,
            restBorderColor, hoverBorderColor, iconHoverColor, iconColor
        ]
    );

    useEffect(() => {
        apply(hovered.current, true);
    }, [apply]);

    const isLink = typeof link === "string" && link.length > 0;
    const Tag = isLink ? "a" : "button";

    return (
        <div
            style={{
                display: "inline-block",
                boxSizing: "border-box",
                paddingLeft: Math.max(0, shadowX),
                paddingTop: Math.max(0, shadowY),
                paddingRight: Math.max(0, -shadowX),
                paddingBottom: Math.max(0, -shadowY),
                ...style,
            }}
        >
            <Tag
                href={isLink ? link : undefined}
                target={isLink && newTab ? "_blank" : undefined}
                rel={isLink && newTab ? "noopener noreferrer" : undefined}
                onPointerEnter={() => { hovered.current = true; apply(true, false); }}
                onPointerLeave={() => { hovered.current = false; apply(false, false); }}
                onPointerDown={() => apply(false, false)}
                onPointerUp={() => apply(hovered.current, false)}
                style={{
                    display: "inline-flex",
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    border: 0,
                    background: "transparent",
                    color: "inherit",
                    textDecoration: "none",
                    cursor: "pointer",
                }}
            >
                <span
                    ref={scope}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: gap,
                        padding,
                        ...borderBoxOf(border),
                        borderColor: restBorderColor,
                        borderRadius: radiusPx,
                        backgroundColor: fill,
                        color: textColor,
                        ...font,
                    }}
                >
                    {addIcon && (
                        <span
                            ref={iconRef}
                            style={{
                                fontSize: iconPx,
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: iconColor,
                            }}
                        >
                            {icon.element ? icon.element : (icon.symbol || "→")}
                        </span>
                    )}
                    {showText && <span>{label}</span>}
                </span>
            </Tag>
        </div>
    );
}