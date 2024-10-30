document.addEventListener('DOMContentLoaded', () => {
    const aliceTumbling = [
        { transform: 'rotate(0) scale(1)' },
        { transform: 'rotate(360deg) scale(0)' }
    ];

    const aliceTiming = {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'
    };

    const alice1 = document.querySelector("#alice1");
    const alice2 = document.querySelector("#alice2");
    const alice3 = document.querySelector("#alice3");

    // 创建一个函数来执行动画
    const animateAlice = (element) => {
        element.animate(aliceTumbling, aliceTiming).onfinish = () => {
            // 继续下一个动画
            if (element === alice1) {
                animateAlice(alice2);
            } else if (element === alice2) {
                animateAlice(alice3);
            }
        };
    };

    // 开始第一个动画
    animateAlice(alice1);
});
