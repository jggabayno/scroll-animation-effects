function animateOnScroll(treshold = 1) {
    
    const scrollAnimateElements = document.querySelectorAll('[scroll-animate]')

    function isValidTransition(config) {

        const transitions = ['fadeIn', 'fadeInBottom', 'slideInLeft', 'slideInRight']

        return transitions.some(transition => config.includes(transition))

    }

    function isAnimateOnce(element, config) {

        const hasKeyWord = config.includes('animateOnce')

        if (!hasKeyWord) {

            const isElementScrolled = element.getBoundingClientRect().top > window.innerHeight

            if (isElementScrolled) {

                element.removeAttribute('scroll-animate')

                const uniqueConfig = [...new Set(config)]
                const filterOutScrolled = uniqueConfig.filter(key => key !== 'scrolled')
                const configString = filterOutScrolled.toString().replaceAll(',', ' ')

                element.setAttribute('scroll-animate', configString)

            }
        }
    }

    function displayScrolledElement(element, config) {

        const isElementReached = element.getBoundingClientRect().top <= (window.innerHeight / treshold)

        if (isElementReached) {

            if (isValidTransition(config)) {

                config.push('scrolled')

                const uniqueConfig = [...new Set(config)]
                const configString = uniqueConfig.toString().replaceAll(',', ' ')

                element.setAttribute('scroll-animate', configString)
                element.style.animationDuration = config.find(key => /\d/.test(key))

            }

        }
    }

    function instance() {

        return scrollAnimateElements.forEach((element) => {

            const config = element.getAttribute('scroll-animate').split(' ')

            displayScrolledElement(element, config)
            isAnimateOnce(element, config)

        })
    }

    let scrolling = false;

    window.addEventListener('scroll', () => { scrolling = true; }, { capture: true, passive: true }) || instance()

    setInterval(() => {
        if (scrolling) {
            scrolling = false;
            instance()
        }
    }, 300);

}