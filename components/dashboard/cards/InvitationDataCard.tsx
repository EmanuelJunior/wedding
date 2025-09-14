import { Clock, MapPin } from "lucide-react";

interface Props {
  invitation: string;
  time: string;
  name: string;
  address: string;
  icon: JSX.Element;
  color?: string;
}

export const InvitationDataCard = ({ invitation, time, name, address, icon, color = 'red' }: Props) => {
  return (
    <article className={`
      flex flex-col border bg-${color}-100 border-${color}-500 dark:bg-${color}-900/50 
      dark:text-white p-3 rounded-xl
    `}>
      <div className="flex items-center gap-1 mb-2">
        { icon }
        <h3 className="text-lg">{ invitation }</h3>
      </div>

      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <p className="text-xs">{ time }</p>
      </div>

      <div className="flex items-center gap-1 mt-1">
        <MapPin className="w-4 h-4" />
        <p className="text-xs">{ name }</p>
      </div>

      <p className="text-xs mt-2">{ address }</p>
    </article>
  );
};
