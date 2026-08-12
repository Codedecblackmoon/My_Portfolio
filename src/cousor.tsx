import { CustomCursor, CustomCursorTarget } from "@/components/ui/custom-cursor";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <CustomCursor color="#ffffff">
      <section className="relative">
        {/* normal content */}
        <CustomCursorTarget aria-label="Play video" size="lg">
          ▶
        </CustomCursorTarget>
      </section>
    </CustomCursor>
  );
}