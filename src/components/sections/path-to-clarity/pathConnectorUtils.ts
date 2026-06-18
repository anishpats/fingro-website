import { useLayoutEffect, useState, type RefObject } from "react";

export interface Point {
  x: number;
  y: number;
}

export function buildConnectorPath(points: Point[]): string {
  if (points.length < 3) return "";

  const [a, b, c] = points;
  const bend = 18;

  return [
    `M ${a.x} ${a.y}`,
    `C ${a.x + (b.x - a.x) * 0.45} ${a.y - bend}`,
    `${b.x - (b.x - a.x) * 0.45} ${b.y - bend}`,
    `${b.x} ${b.y}`,
    `C ${b.x + (c.x - b.x) * 0.45} ${b.y - bend}`,
    `${c.x - (c.x - b.x) * 0.45} ${c.y - bend}`,
    `${c.x} ${c.y}`,
  ].join(" ");
}

function pointsEqual(a: Point[], b: Point[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((point, i) => point.x === b[i].x && point.y === b[i].y);
}

export function useIconPositions(
  gridRef: RefObject<HTMLDivElement | null>,
  iconRefs: RefObject<HTMLDivElement | null>[],
  enabled: boolean,
) {
  const [layout, setLayout] = useState<{
    points: Point[];
    width: number;
    height: number;
  }>({
    points: [],
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (!enabled) {
      setLayout((prev) =>
        prev.points.length === 0 && prev.width === 0 && prev.height === 0
          ? prev
          : { points: [], width: 0, height: 0 },
      );
      return;
    }

    const measure = () => {
      const grid = gridRef.current;
      if (!grid) return;

      const gridRect = grid.getBoundingClientRect();
      const { width, height } = gridRect;

      const points = iconRefs
        .map((ref) => {
          const el = ref.current;
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2 - gridRect.left,
            y: rect.top + rect.height / 2 - gridRect.top,
          };
        })
        .filter((point): point is Point => point !== null);

      if (points.length !== iconRefs.length) return;

      setLayout((prev) => {
        if (
          prev.width === width &&
          prev.height === height &&
          pointsEqual(prev.points, points)
        ) {
          return prev;
        }
        return { points, width, height };
      });
    };

    measure();

    const grid = gridRef.current;
    if (!grid) return;

    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
    // gridRef and iconRefs are stable refs — only re-run when enabled toggles
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return layout;
}
