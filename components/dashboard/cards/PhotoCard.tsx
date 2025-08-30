
import { Photo } from "@/contexts/photo";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react"
import { MessageCircle, ThumbsUp, User } from "lucide-react"

interface Props {
  photo: Photo
  onOpen: () => void;
}

export const PhotoCard = ({ onOpen, photo }: Props) => {
  return (
    <Card isPressable shadow="sm" className='flex' onPress={onOpen}>
      <CardBody className="overflow-visible p-0">
        <Image
          alt="Test"
          className="w-full object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={ photo.image }
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small flex flex-col justify-center items-center gap-3">
        <div className='flex justify-between items-center gap-5 w-full'>
          <Chip color='danger' variant='flat' size='sm' className='text-[11px]'>{ photo.category }</Chip>
          <p className='text-[11px] text-gray-400'>Hace 2 horas</p>
        </div>

        <p className='text-gray-500 dark:text-gray-300 text-xs'>{ photo.description }</p>

        <div className='flex justify-between items-center gap-5 w-full'>
          <div className='flex gap-1 items-center'>
            <User className='w-3 h-3 text-gray-300'/>
            <p className='text-[11px]'>Maria</p>
          </div>

          <div className='flex gap-1 items-center'>
            <div className='flex gap-1 items-center hover:text-red-300 z-50'>
              <ThumbsUp className='w-3 h-3 text-gray-300'/>
              <p className='text-[11px] text-gray-400'>43</p>
            </div>
            <div className='flex gap-1 items-center hover:text-blue-300'>
              <MessageCircle className='w-3 h-3 text-gray-300'/>
              <p className='text-[11px] text-gray-400'>54</p>
            </div>
          </div>
          
        </div>
      </CardFooter>
    </Card>
  )
}
