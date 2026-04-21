'use client'

import { fadeUpAnimation } from '@/data/animation'
import { ServiceData } from '@/data/data'
import useWhileInView from './useWhileInView'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const ServiceBoxes = () => {
  const service = ServiceData()
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <motion.div
      className="flex flex-wrap gap-y-3 md:gap-8"
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}>
      {service?.map((items) => (
        <div
          className="relative max-md:w-full md:w-[calc(50%-1rem)] rounded-medium bg-white md:p-2.5 dark:bg-transparent"
          key={items.id}>
          <div className="md:h-full rounded border border-dashed border-gray-100 p-6 md:p-10 dark:border-borderColor-dark">
            <Image
              src={items.iconLight}
              alt="service logo"
              width={130}
              height={130}
              className="mb-6 inline-block dark:hidden h-[100px] w-[100px] md:h-[130px] md:w-[130px]"
            />
            <Image
              src={items.iconDark}
              alt="service logo"
              width={130}
              height={130}
              className="mb-6 hidden dark:inline-block h-[100px] w-[100px] md:h-[130px] md:w-[130px]"
            />
            <h3 className="mb-2.5 text-3xl md:text-4xl max-w-[400px] font-bold bg-primary-gradient bg-clip-text !text-transparent !leading-normal border-b border-dashed border-gray-100 pb-4 dark:border-borderColor-dark">
              {items.title}
            </h3>
            <p
  className="md:mb-6 mt-5 text-xl md:text-2xl dark:!text-gray-300 !leading-relaxed font-regular"
  dangerouslySetInnerHTML={{
    __html: items.description.replace(/\.(?=\s|$)/g, (match, offset, string) =>
      offset === string.lastIndexOf('.') ? match : `.<br/>`
    ),
  }}
></p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default ServiceBoxes
