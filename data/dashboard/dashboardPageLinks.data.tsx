import { DashboardPageLinks } from '@/interfaces';
import { Camera, MessageCircle, Clock, MapPin, Users, BookHeart } from 'lucide-react';

export const dashboardPageLinks: DashboardPageLinks[] = [
  {
    icon: <Camera className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Galeria",
    description: "Fotos especiales",
    path: 'not-found'
  },
  {
    icon: <MessageCircle className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Mensajes",
    description: "Buenos deseos",
    path: 'not-found'
  },
  {
    icon: <Clock className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Timeline",
    description: "Cronograma",
    path: 'not-found'
  },
  {
    icon: <MapPin className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Mapa",
    description: "Ubicaciones",
    path: 'not-found'
  },
  {
    icon: <Users className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Invitados",
    description: "Lista",
    path: 'not-found'
  },
  {
    icon: <BookHeart className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Historia",
    description: "De Amor",
    path: 'not-found'
  },
]