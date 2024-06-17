import Gift from '../images/giftbox.png'
import { Button } from './ui/button'

const GiftCard = () => {
  return (
    <div className='w-full'>
      <a href='https://www.29cm.co.kr'>
        <div className='flex justify-center'>
          <img
            src={Gift}
            alt="recommended product"
            width={200}
            height={200}
            className="object-cover group-hover:opacity-50 transition-opacity"
          />
        </div>
        <div className="py-2 bg-white dark:bg-gray-950">
          <h3 className="text-lg font-semibold md:text-xl">Apparel</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex items-center justify-between mt-2">
            <h4 className="text-base font-semibold md:text-lg">\30,000</h4>
            <Button size="sm" className='py-0 px-2 bg-blue-500 hover:bg-blue-600'>구매하러 가기</Button>
          </div>
        </div>
      </a>
    </div>
  )
}

export default GiftCard