'use client'
import { useRef } from 'react'

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef()
  return (
    <div className="faq-item rounded-medium bg-white p-2.5 dark:bg-secondary-900 max-w-[850px]  mx-auto">
      <button
        className="faq-header flex w-full cursor-pointer items-center rounded border border-dashed border-gray-100 bg-white px-2 sm:px-5 py-3 dark:border-borderColor-dark  dark:bg-secondary-900 max-md:gap-x-2.5"
        onClick={onClick}>
                  {isOpen ? (
          <span className="me-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.25 10H13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                className="stroke-paragraph dark:stroke-primary"
              />
            </svg>
          </span>
        ) : (
          <span className="me-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                className="stroke-paragraph dark:stroke-primary"
              />
            </svg>
          </span>
        )}
        <span className=" text-lg md:text-2xl font-medium text-start"> {question}</span>

      </button>
      <div
        ref={contentHeight}
        className={`faq-body overflow-hidden`}
        style={isOpen ? { height: contentHeight?.current?.scrollHeight } : { height: '0px' }}>
<p className={`px-2 sm:px-6 pb-3.5 pt-6 text-lg md:text-2xl leading-relaxed dark:text-[#A1A49D]`}>
  {answer.split('/n').map((line, index) => (
    <>
      {line.includes('www.shararamedia.com') ? (
        <>
          {line.split('www.shararamedia.com')[0]}
          <a
            href="https://www.shararamedia.com"
            className="!text-primary underline text-lg md:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.shararamedia.com
          </a>
          {line.split('www.shararamedia.com')[1]}
        </>
      ) : (
        line
      )}
      <br />
    </>
  ))}
</p>

      </div>
    </div>
  )
}

export default FaqItem
