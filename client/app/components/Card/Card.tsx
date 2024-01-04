import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  title: string
  picture: string
  id: string
}

function Card({ title, picture, id }: CardProps) {
  return (
    <Link
      href=""
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        key={id}
        src={picture}
        width={240}
        height={240}
        alt="logement"
      />
      <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </span>
    </Link>
  )
}

export default Card
