import { DashboardPageLinks } from '@/interfaces';
import { Camera, MessageCircle, Clock, MapPin, Users, BookHeart } from 'lucide-react';

export const dashboardPageLinks: DashboardPageLinks[] = [
  {
    icon: <Camera className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Galeria",
    description: "Fotos especiales",
    path: 'gallery'
  },
  {
    icon: <MessageCircle className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Mensajes",
    description: "Buenos deseos",
    path: 'messages'
  },
  {
    icon: <Clock className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Timeline",
    description: "Cronograma",
    path: 'gallery'
  },
  {
    icon: <MapPin className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Mapa",
    description: "Ubicaciones",
    path: 'gallery'
  },
  {
    icon: <Users className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Invitados",
    description: "Lista",
    path: 'guest'
  },
  {
    icon: <BookHeart className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Historia",
    description: "De Amor",
    path: 'gallery'
  },
]