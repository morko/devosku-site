import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function getDistance(p1, p2) {
  var dx = p2.x - p1.x
  var dy = p2.y - p1.y
  return Math.sqrt(dx * dx + dy * dy)
}

const initialPathStyle = {
  opacity: 0,
}

export default function MainIllustration(props) {
  const { className } = props

  const ref = useRef()

  useEffect(() => {
    const rootEl = ref.current

    const bounds = rootEl.getBBox()

    const xOffset = 0.7
    const yOffset = 0.7
    const center = {
      x: bounds.width * xOffset,
      y: bounds.height * yOffset,
    }
    const radius = getDistance(center, bounds)
    const stagger = 0.5

    const tl = gsap.timeline()

    for (let i = 0; i < rootEl.children.length; i++) {
      const el = rootEl.children[i]
      const bbox = el.getBBox()

      let dist = getDistance(bbox, center)
      let delay = (dist / radius) * stagger
      let scalar = radius / dist
      tl.fromTo(
        el,
        {
          opacity: 0,
          x: (bbox.x - center.x) * scalar,
          y: (bbox.y - center.y) * scalar,
          rotation: 20,
          transform: 'skew(20deg)',
        },
        {
          duration: 1,
          delay,
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          transform: 'skew(0)',
        },
        0
      )
    }
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <svg
      className={className}
      viewBox="-300 0 1300 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M637.701 623.44C639.148 624.247 640.674 624.902 642.255 625.394C645.083 626.168 648.106 625.884 650.962 626.544C652.132 626.815 653.405 627.38 653.776 628.523C654.049 629.362 653.753 630.267 653.468 631.102C650.312 640.371 648.409 650.213 643.376 658.609C641.26 662.136 638.634 665.328 635.584 668.084C634.44 669.117 633.143 670.127 631.611 670.289C630.905 670.364 630.192 670.251 629.543 669.961C628.895 669.672 628.334 669.216 627.918 668.64C627.502 668.064 627.244 667.388 627.172 666.68C627.1 665.973 627.215 665.259 627.507 664.611C627.958 663.606 628.797 662.828 629.338 661.869C629.925 660.647 630.269 659.323 630.351 657.97C630.849 654.006 631.328 649.862 629.956 646.11C629.036 643.593 627.349 641.448 625.944 639.168C624.538 636.887 623.37 634.275 623.683 631.614C623.896 629.798 624.781 628.135 625.715 626.564C626.652 624.99 628.502 620.759 630.383 620.234C632.336 619.688 635.998 622.566 637.701 623.44Z"
          fill="#535355"
        />
        <path
          d="M586.231 655.459C586.201 656.355 586.326 657.251 586.6 658.105C587.189 659.663 588.65 660.73 589.404 662.214C590.454 664.278 589.978 666.772 589.283 668.982C588.847 670.366 588.275 671.808 587.104 672.664C586.103 673.286 584.965 673.651 583.789 673.728C573.746 675.12 563.544 674.321 553.409 674.613C551.562 674.666 549.606 674.731 547.994 673.827C546.382 672.922 545.385 670.649 546.481 669.16C547.466 667.822 549.413 667.834 551.071 667.756C555.387 667.536 559.497 665.84 562.716 662.951C563.35 662.408 563.901 661.773 564.349 661.068C564.694 660.442 564.98 659.785 565.204 659.106C566.624 655.251 568.314 651.502 570.261 647.885C570.807 646.873 571.424 645.819 572.436 645.277C573.178 644.939 573.983 644.763 574.797 644.761C577.323 644.597 583.864 643.736 585.817 645.703C587.622 647.521 586.191 653.15 586.231 655.459Z"
          fill="#535355"
        />
        <path
          d="M570.687 430.804C561.777 430.804 554.553 423.569 554.553 414.644C554.553 405.719 561.777 398.484 570.687 398.484C579.598 398.484 586.821 405.719 586.821 414.644C586.821 423.569 579.598 430.804 570.687 430.804Z"
          fill="#FCC39A"
        />
        <path
          d="M585.257 427.988C586.216 430.561 587.844 432.978 590.213 434.363L567.898 438.922C568.707 435.66 568.814 432.263 568.211 428.956C567.989 428.156 567.944 427.317 568.077 426.497C568.497 424.875 570.319 424.095 571.95 423.723C576.023 422.793 579.624 422.294 583.409 420.492C584.566 422.476 584.404 425.701 585.257 427.988Z"
          fill="#FBBEBE"
        />
        <path
          d="M590.399 428.312C587.999 427.224 585.383 426.695 582.749 426.764C580.115 426.833 577.531 427.498 575.19 428.71C572.33 430.22 569.961 432.5 567.633 434.748C565.488 436.821 563.2 439.195 563.047 442.176C562.974 443.621 563.424 445.034 563.651 446.462C564.06 449.416 563.54 452.424 562.166 455.069C560.791 457.714 558.628 459.866 555.978 461.225C554.205 464.182 553.839 467.766 553.812 471.216C553.709 484.287 557.826 497.519 554.887 510.254C554.197 513.244 553.127 516.14 552.53 519.15C551.758 523.049 551.796 527.059 551.392 531.013C550.954 535.295 549.998 539.508 548.545 543.559C549.516 545.106 551.537 545.699 553.357 545.574C555.178 545.449 556.879 544.658 558.504 543.825C566.368 539.794 573.571 534.479 581.716 531.054C587.105 528.787 592.846 527.376 598.073 524.758C603.301 522.14 608.163 517.986 609.762 512.355C610.453 509.921 610.495 507.355 610.533 504.824C610.692 494.164 610.839 483.387 608.523 472.982C606.48 463.805 602.542 455.026 601.683 445.664C601.403 442.616 601.397 439.354 599.697 436.811C597.294 433.217 592.106 432.286 590.399 428.312Z"
          fill="#535355"
        />
        <path
          d="M588.972 593.095C588.557 596.063 588.025 599.041 588.167 602.035C588.365 606.214 589.87 610.241 590.148 614.416C590.356 617.534 589.876 620.686 590.308 623.781C590.585 625.763 591.23 627.673 591.629 629.634C592.262 632.829 592.244 636.119 591.577 639.307C590.91 642.495 589.607 645.515 587.747 648.187C587.473 648.644 587.085 649.021 586.62 649.28C586.174 649.446 585.697 649.509 585.224 649.466C580.528 649.37 575.844 648.944 571.208 648.19C570.869 648.176 570.547 648.034 570.308 647.792C570.204 647.632 570.137 647.45 570.113 647.26C569.253 642.834 571.213 638.396 571.712 633.915C572.244 629.129 571.098 624.334 569.96 619.656C569.444 617.349 568.799 615.072 568.029 612.837C567.479 611.332 566.815 609.869 566.338 608.34C565.663 605.937 565.252 603.468 565.112 600.976C564.781 597.044 564.606 593.103 564.586 589.153C564.474 585.41 564.785 581.666 565.513 577.993C566.559 573.343 568.701 569.025 570.823 564.758C571.958 565.031 573.024 565.538 573.951 566.247C576.687 568.022 579.543 569.602 582.499 570.977C584.485 571.901 588.358 572.557 589.618 574.483C590.861 576.382 590.059 580.256 589.964 582.35C589.801 585.945 589.47 589.526 588.972 593.095Z"
          fill="#535355"
        />
        <path
          opacity="0.1"
          d="M588.972 593.095C588.557 596.063 588.025 599.041 588.167 602.035C588.365 606.214 589.87 610.241 590.148 614.416C590.356 617.534 589.876 620.686 590.308 623.781C590.585 625.763 591.23 627.673 591.629 629.634C592.262 632.829 592.244 636.119 591.577 639.307C590.91 642.495 589.607 645.515 587.747 648.187C587.473 648.644 587.085 649.021 586.62 649.28C586.174 649.446 585.697 649.509 585.224 649.466C580.528 649.37 575.844 648.944 571.208 648.19C570.869 648.176 570.547 648.034 570.308 647.792C570.204 647.632 570.137 647.45 570.113 647.26C569.253 642.834 571.213 638.396 571.712 633.915C572.244 629.129 571.098 624.334 569.96 619.656C569.444 617.349 568.799 615.072 568.029 612.837C567.479 611.332 566.815 609.869 566.338 608.34C565.663 605.937 565.252 603.468 565.112 600.976C564.781 597.044 564.606 593.103 564.586 589.153C564.474 585.41 564.785 581.666 565.513 577.993C566.559 573.343 568.701 569.025 570.823 564.758C571.958 565.031 573.024 565.538 573.951 566.247C576.687 568.022 579.543 569.602 582.499 570.977C584.485 571.901 588.358 572.557 589.618 574.483C590.861 576.382 590.059 580.256 589.964 582.35C589.801 585.945 589.47 589.526 588.972 593.095Z"
          fill="black"
        />
        <path
          d="M610.784 529.702C612.927 535.479 609.777 541.723 607.041 547.243C600.3 560.844 595.619 575.357 590.963 589.807C590.614 590.89 590.266 592.071 590.655 593.139C590.991 593.898 591.536 594.546 592.226 595.006C595.436 597.448 599.524 598.318 603.348 599.596C607.044 600.831 610.584 602.493 613.896 604.548C616.668 606.268 619.264 608.254 621.854 610.236L630.102 616.545C630.636 616.907 631.103 617.359 631.481 617.882C632.276 619.132 631.95 620.764 631.554 622.192C630.506 625.974 629.155 629.665 627.516 633.23C627.247 634.012 626.733 634.686 626.052 635.153C624.764 635.846 623.19 634.927 622.207 633.844C621.224 632.76 620.373 631.413 618.988 630.948C617.604 630.483 616.08 631.046 614.635 630.842C612.297 630.514 610.744 628.356 609.059 626.7C602.174 619.934 590.678 620.425 583.104 614.443C582.009 613.462 580.85 612.555 579.634 611.728C578.354 610.97 576.902 610.554 575.573 609.884C571.533 607.846 568.992 603.633 567.632 599.311C566.271 594.99 565.883 590.428 564.905 586.004C564.399 583.717 563.734 581.454 563.509 579.122C563.365 576.954 563.412 574.776 563.65 572.616L566.383 538.753C566.606 535.996 566.828 533.236 567.26 530.504C575.377 530.795 583.488 531.122 591.609 531.218C598.072 531.295 604.653 531.747 610.784 529.702Z"
          fill="#535355"
        />
        <path
          d="M613.768 537.623C612.667 539.397 609.987 539.36 608.142 538.388C606.297 537.415 604.863 535.782 603.013 534.817C600.528 533.522 597.586 533.571 594.785 533.65C590.351 533.775 585.862 533.909 581.596 535.126C577.183 536.385 572.887 538.809 568.324 538.325C567.53 538.241 566.662 538.013 566.23 537.341C565.977 536.854 565.858 536.308 565.885 535.759L565.736 531.766C565.644 531.076 565.755 530.373 566.053 529.744C566.436 529.221 566.961 528.818 567.565 528.585C574.06 525.436 581.466 524.849 588.678 524.602C592.343 524.476 596.011 524.424 599.679 524.447C602.792 524.466 606.53 524.014 609.557 524.848C613.619 525.966 615.829 534.303 613.768 537.623Z"
          fill="#535355"
        />
        <path
          d="M572.988 433.052C581.497 432.977 589.209 427.351 597.718 427.214C598.746 427.142 599.776 427.32 600.72 427.733C601.906 428.331 602.686 429.488 603.586 430.464C606.102 433.193 609.745 434.65 612.33 437.314C614.754 439.811 616.101 443.532 615.145 446.881C614.188 450.229 610.577 452.797 607.194 451.992C605.831 447.573 603.018 443.745 599.21 441.128C597.23 439.855 595.142 438.758 592.971 437.848C589.147 436.112 584.87 434.343 580.878 435.644C579.406 436.201 578.017 436.96 576.752 437.898L570.096 442.376C570.872 439.312 571.569 435.876 572.988 433.052Z"
          fill="#CE9A4C"
        />
        <path
          d="M608.174 449.03C609.304 450.442 607.676 452.488 607.925 454.28C608.091 455.471 609.069 456.38 609.477 457.511C609.899 458.682 609.675 459.98 609.835 461.215C609.995 462.113 610.233 462.996 610.545 463.853C611.262 466.414 611.762 469.03 612.041 471.675L613.53 482.816C613.789 484.493 613.946 486.184 614.001 487.879C613.926 489.146 614.011 490.418 614.253 491.664C614.583 492.882 615.313 493.947 615.804 495.108C616.296 496.27 616.523 497.675 615.86 498.747C618.082 500.601 618.743 504.243 617.189 506.686C616.893 507.067 616.662 507.494 616.504 507.95C616.418 508.587 616.523 509.235 616.806 509.813L618.312 513.832C618.697 514.861 618.819 516.427 617.747 516.662C618.635 517.586 619.327 518.68 619.781 519.878C620.001 520.48 620.067 521.128 619.972 521.762C619.877 522.396 619.625 522.996 619.239 523.507C618.865 523.836 618.546 524.223 618.296 524.654C618.148 525.254 618.186 525.884 618.405 526.462C618.63 527.34 618.673 528.255 618.532 529.15C618.391 530.045 618.069 530.902 617.584 531.668C617.083 532.423 616.372 533.016 615.54 533.373C614.707 533.731 613.789 533.837 612.897 533.68C609.884 533 607.177 531.925 604.139 532.484C597.599 533.686 591.037 534.893 584.703 536.919C577.473 539.231 570.472 542.621 562.916 543.333C562.419 543.435 561.902 543.354 561.459 543.106C561.074 542.74 560.835 542.247 560.785 541.718C560.007 538.063 559.229 534.407 558.45 530.751C557.509 526.699 556.792 522.597 556.303 518.466C556.037 515.799 555.962 513.117 555.886 510.439L555.284 489.116C555.002 485.974 555.421 482.808 556.509 479.847L559.971 468.777C561.947 462.46 566.479 456.858 568.093 450.438C569.114 446.375 569.869 442.015 572.608 438.848C576.512 434.333 583.268 433.631 589.181 434.407C591.852 434.758 594.546 435.363 596.857 436.751C599.529 438.355 601.497 440.883 603.401 443.352C604.971 445.387 606.568 447.024 608.174 449.03Z"
          fill="#CE9A4C"
        />
        <path
          d="M594.367 511.746C593.88 513.85 592.857 515.79 592.231 517.857C591.182 521.32 591.271 525.049 590.223 528.512C589.784 529.966 589.147 531.362 588.832 532.847C588.096 536.311 589.17 539.895 590.504 543.174C591.838 546.454 593.463 549.687 593.896 553.202C594.201 555.677 593.763 558.472 591.858 560.079C589.88 561.747 587.006 561.634 584.43 561.412C583.505 561.386 582.593 561.196 581.734 560.85C579.765 559.916 578.935 557.581 578.474 555.448C576.931 548.299 577.372 540.888 577.821 533.587L578.993 514.494C579.219 510.818 579.461 507.066 580.592 503.536C581.003 502.253 581.72 499.658 582.891 498.838C584.051 498.026 587.362 497.99 588.798 497.923C595.535 497.606 595.459 507.023 594.367 511.746Z"
          fill="#FCC39A"
        />
        <path
          d="M586.904 441.249C588.279 440.528 590.013 440.839 591.343 441.642C592.627 442.523 593.751 443.617 594.668 444.876C597.641 448.511 600.788 452.681 600.347 457.359C600.182 459.113 599.511 460.773 599.056 462.475C597.063 469.937 599.267 477.829 599.015 485.549C598.868 490.011 597.899 494.398 596.934 498.756C596.737 499.645 596.422 500.675 595.563 500.974C594.917 501.199 594.221 500.91 593.582 500.667C591.203 499.786 588.647 499.492 586.131 499.81C583.614 500.128 581.211 501.048 579.125 502.492C577.53 501.639 578.127 498.943 578.485 497.168C579.548 491.893 578.105 486.452 576.353 481.365C574.601 476.278 572.505 471.197 572.215 465.824C571.886 459.736 573.902 453.793 575.89 448.031C576.324 446.773 576.798 445.454 577.805 444.585C578.666 443.943 579.654 443.492 580.702 443.259C582.814 442.634 584.952 442.273 586.904 441.249Z"
          fill="#535355"
        />
        <path
          d="M570.527 411.342C571.029 413.35 570.822 431.42 566.514 431.42C562.206 431.42 562.317 431.407 561.497 429.915C560.678 428.422 560.815 425.907 564.006 424.393C567.196 422.879 570.026 409.334 570.527 411.342Z"
          fill="#535355"
        />
        <path
          d="M584.574 402.809C585.076 406.323 553.47 408.833 553.47 408.833C553.47 408.833 545.444 411.844 545.444 410.338C545.444 408.833 551.965 407.829 551.965 407.829L553.47 405.319C565.129 388.823 584.073 399.295 584.574 402.809Z"
          fill="black"
          stroke="black"
        />
      </g>
      <g ref={ref}>
        <path
          style={initialPathStyle}
          d="M243.889 485.888C336.061 485.888 410.782 411.144 410.782 318.943C410.782 226.742 336.061 151.997 243.889 151.997C151.717 151.997 76.9969 226.742 76.9969 318.943C76.9969 411.144 151.717 485.888 243.889 485.888Z"
          fill="#BFCBBA"
        />
        <path
          style={initialPathStyle}
          d="M921.766 121.669L580.62 319.374L607.551 365.875L948.697 168.17L921.766 121.669Z"
          fill="#878787"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M527.553 642.328L389.544 472.383L356.282 494.48L494.375 668.78L527.553 642.328Z"
          fill="#878787"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.0404 700.633L220.039 581.511L205.066 559.958L39.8463 666.845L57.0404 700.633Z"
          fill="#EAE8E4"
        />
        <path
          style={initialPathStyle}
          d="M413.249 687.727L352.42 597.185L338.396 606.614L399.225 697.155L413.249 687.727Z"
          fill="#60BEBF"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M496.308 505.332L432.907 428.103L405.912 443.649L467.693 528.062L496.308 505.332Z"
          fill="#3A8EAA"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M942.652 -74.16L285.116 385.927L317.533 428.302L999.235 -3.86502L942.652 -74.16Z"
          fill="#385366"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M326.582 436.53L554.115 312.059L570.502 341.582L345.684 464.831L326.582 436.53Z"
          fill="#E5AB17"
        />
        <path
          style={initialPathStyle}
          d="M213.836 619.978L18.6853 784.023L40.4032 809.876L235.554 645.831L213.836 619.978Z"
          fill="#EAE8E4"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M153.974 651.152L235.334 586.156L250.799 603.181L169.439 668.177L153.974 651.152Z"
          fill="#E5AB17"
        />
        <path
          style={initialPathStyle}
          d="M690.504 344.834L916.177 220.896L924.85 237.866L699.177 361.802L690.504 344.834Z"
          fill="#B3B3B3"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M709.733 203.012L927.752 71.5278L937.585 87.8501L719.566 219.335L709.733 203.012Z"
          fill="#BFCBBA"
        />
        <path
          style={initialPathStyle}
          d="M881.555 281.44L654.85 397.417L657.043 401.706L883.748 285.729L881.555 281.44Z"
          fill="#849C9B"
        />
        <path
          style={initialPathStyle}
          d="M497.542 687.92L102.38 190.214L91.1552 199.132L486.317 696.838L497.542 687.92Z"
          fill="#B3B3B3"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M360.953 559.692L95.274 237.392L53.678 264.478L315.12 594.11L360.953 559.692Z"
          fill="#849C9B"
        />
        <path
          style={initialPathStyle}
          d="M451.506 127.821C465.637 124.43 474.36 110.283 470.989 96.2237C467.617 82.1638 453.428 73.5148 439.297 76.9055C425.166 80.2963 416.443 94.4427 419.814 108.502C423.186 122.562 437.374 131.211 451.506 127.821Z"
          fill="#849C9B"
        />
        <path
          style={initialPathStyle}
          d="M67.9843 546.397C93.4331 540.29 109.142 514.814 103.07 489.494C96.9988 464.175 71.4466 448.599 45.9977 454.705C20.5488 460.811 4.84032 486.287 10.9117 511.607C16.9832 536.927 42.5354 552.503 67.9843 546.397Z"
          fill="#EAE8E4"
        />
        <path
          style={initialPathStyle}
          d="M272.755 344.871C283.827 342.215 290.661 331.131 288.019 320.115C285.378 309.1 274.261 302.323 263.189 304.98C252.118 307.636 245.283 318.72 247.925 329.736C250.566 340.751 261.683 347.528 272.755 344.871Z"
          fill="#878787"
        />
        <path
          style={initialPathStyle}
          d="M160.78 545.464C171.798 542.821 178.599 531.791 175.97 520.829C173.341 509.866 162.279 503.123 151.261 505.767C140.243 508.41 133.442 519.44 136.07 530.402C138.699 541.364 149.762 548.108 160.78 545.464Z"
          fill="#BFCBBA"
        />
        <path
          style={initialPathStyle}
          d="M282.85 366.655L470.39 237.12L468.8 234.816L281.26 364.352L282.85 366.655Z"
          fill="#B3B3B3"
        />
        <path
          style={initialPathStyle}
          d="M52.4468 88.7148L149.495 209.942L151.679 208.192L54.6307 86.9653L52.4468 88.7148Z"
          fill="#B3B3B3"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M751.979 551.991L725.98 522.069L723.655 524.091L749.654 554.014L719.74 580.025L721.764 582.351L751.678 556.34L777.683 586.263L780.009 584.241L754.003 554.318L783.917 528.306L781.893 525.98L751.979 551.991Z"
          fill="#878787"
        />
        <path
          style={initialPathStyle}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.3907 496.59L44.0002 481.18L42.8027 482.222L56.1933 497.631L40.7892 511.025L41.8302 512.224L57.2342 498.829L70.625 514.238L71.8221 513.196L58.4317 497.787L73.8355 484.393L72.7946 483.194L57.3907 496.59Z"
          fill="#878787"
        />
      </g>

      <defs>
        <clipPath id="clip0">
          <rect width="999.435" height="810" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
