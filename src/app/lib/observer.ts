export function animatedElements(trackedClass: string, animatedClasses: string) {
    document.querySelectorAll('.no_js')[0]?.classList.remove('no_js');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => { entry.target.classList.add(animatedClasses) }, 300 * i);
                observer.unobserve(entry.target);
            };
        })
    }, { threshold: 0.3 });

    const listAnimatedElements = document.querySelectorAll(trackedClass);

    listAnimatedElements.forEach((el) => {
        observer.observe(el);
    });

    return () => {
        listAnimatedElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
    };
};