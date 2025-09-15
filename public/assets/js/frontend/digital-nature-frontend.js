(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    // add an intersection observer to switch in the video src attribute when it is nearly on screen
    document.addEventListener('DOMContentLoaded', function() {
        const videos = document.querySelectorAll('video');

        const config = { rootMargin: '200px', threshold: 0.01 };

        const onIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    const sources = video.querySelectorAll('source[data-src]');
                    let needsLoad = false;

                    sources.forEach(source => {
                        if (!source.src) {
                            source.src = source.getAttribute('data-src');
                            needsLoad = true;
                        }
                    });

                    if (needsLoad) {
                        video.load();
                    }
                    observer.unobserve(video);
                }
            });
        };

        const observer = new IntersectionObserver(onIntersection, config);
        videos.forEach(video => observer.observe(video));
    });

}));
//# sourceMappingURL=digital-nature-frontend.js.map
