const ToRight = ({ className }: { className?: string }) => {
  return (
    <span>
      <svg
        width={14}
        height={12}
        className={className}
        viewBox='0 0 14 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g clipPath='url(#clip0_4_3981)'>
          <g clipPath='url(#clip1_4_3981)'>
            <g clipPath='url(#clip2_4_3981)'>
              <rect x='1.01953' width={12} height={12} fill='url(#pattern0_4_3981)' />
            </g>
          </g>
        </g>
        <defs>
          <pattern id='pattern0_4_3981' patternContentUnits='objectBoundingBox' width={1} height={1}>
            <use xlinkHref='#image0_4_3981' transform='scale(0.0833333)' />
          </pattern>
          <clipPath id='clip0_4_3981'>
            <rect width={13} height={12} fill='white' transform='translate(0.0195312)' />
          </clipPath>
          <clipPath id='clip1_4_3981'>
            <rect width={13} height={12} fill='white' transform='translate(0.0195312)' />
          </clipPath>
          <clipPath id='clip2_4_3981'>
            <rect width={13} height={12} fill='white' transform='translate(0.0195312)' />
          </clipPath>
          <image
            id='image0_4_3981'
            width={12}
            height={12}
            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAAXNSR0IB2cksfwAAACRQTFRFAAAA////////////////////////////////////////////tAmN6QAAAAx0Uk5TADC//88QUGDvr5+A9/RnbAAAADxJREFUeJxjYGBgVGAAASYTMMXq7ACmQ4DctLS09GYHBmMQMGKYCQTGbSA5LosEELUYmcMN5jAwCDAwAADFTAsglGvZEAAAAABJRU5ErkJggg=='
          />
        </defs>
      </svg>
    </span>
  )
}

export default ToRight