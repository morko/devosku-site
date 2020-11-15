import React from 'react'

export default function Logo(props) {
  const { className } = props;
  return (
    <svg
      className={className}
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.1661 37.6856C29.3496 39.4761 26.6276 42.7492 25 47.505L25.9261 47.8407C26.7679 46.33 27.5817 45.0991 28.3675 44.1479C29.1532 43.1408 30.3038 42.1057 31.8191 41.0427C34.7376 39.0284 39.7046 37.9374 46.7201 37.7696H52.1923H68.777C73.4915 37.7696 77.6447 38.8886 81.2366 41.1266C84.8847 43.3646 87.6909 46.5258 89.6553 50.6102C91.6758 54.6387 92.686 59.3106 92.686 64.6259C92.686 72.6828 90.4691 79.1731 86.0353 84.0967C81.6576 89.0204 75.9048 91.4822 68.777 91.4822H59.2078V51.1628H53.7357V88.377C53.5673 89.7198 52.978 90.8668 51.9678 91.8179C50.9575 92.7131 49.7509 93.1607 48.3477 93.1607H47.3375L47.2533 94H68.777C77.7569 94 85.025 91.3144 90.5813 85.9431C96.1938 80.5159 99 73.4101 99 64.6259C99 58.807 97.7091 53.7155 95.1274 49.3514C92.6018 44.9312 89.066 41.5183 84.5199 39.1124C79.9738 36.7065 74.7262 35.4196 68.777 35.2518C60.5829 35.0839 55.4755 35 53.4551 35C43.7455 35 36.9826 35.8952 33.1661 37.6856Z"
        fill="#B57414"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 121C95.4802 121 121 95.4802 121 64C121 32.5198 95.4802 7 64 7C32.5198 7 7 32.5198 7 64C7 95.4802 32.5198 121 64 121ZM64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z"
        fill="#C27500"
      />
    </svg>
  )
}
