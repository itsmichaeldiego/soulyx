import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { createContext, useEffect, useRef, useState } from "react";
import { scrollSpy } from 'react-scroll'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

export const SmoothScrollContext = createContext({
  scroll: null
});

export const SmoothScrollProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [scroll, setScroll] = useState(null);
  const scrollWrapper = useRef<any>();

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          /* @ts-ignore */
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          const locoScroll = new LocomotiveScroll({
            el: scrollWrapper.current,
            smooth: true,
          });

          setScroll(locoScroll);

          ScrollTrigger.defaults({
            scroller: locoScroll.el,
            pinType: 'transform'
          });

          locoScroll.on("scroll", ScrollTrigger.update);
          locoScroll.on("scroll", scrollSpy.update);

          ScrollTrigger.scrollerProxy(locoScroll.el, {
            scrollTop(value) {
              return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
              };
            },
            pinType: locoScroll.el.style.transform
              ? "transform"
              : "fixed"
          });

          ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
          ScrollTrigger.refresh();


        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      /* @ts-ignore */
      scroll && scroll.destroy();
    };
  }, [scroll]);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      <div id="smooth-scroll" data-scroll-container ref={scrollWrapper}>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
};
