import { Button, Card, CardBody } from "@nextui-org/react";
import { Gem, ThumbsUp } from "lucide-react";

interface MessageCardProps {
  fullName: string;
  message: string;
  likes: number;
}

export const MessageCard = ({}: MessageCardProps) => {
  return (
    <Card className="dark:bg-gray-900">
      <CardBody>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Gem className="w-6 h-6 text-red-700 dark:text-red-500" />
            <h3 className="text-xl dark:text-white">Juan Pérez</h3>
          </div>
          <p className="text-xs dark:text-gray-300">
            "¡Felicidades en su boda! Les deseo toda la felicidad del mundo en
            esta nueva etapa de sus vidas juntos."
          </p>
          {/* Me gusta */}
          <div className="flex gap-4">
            <Button
              variant="light"
              size="sm"
              className="text-[12px] h-6 bg-gray-100 dark:bg-gray-800 dark:text-white gap-1 px-2"
            >
              <ThumbsUp className="w-3 h-3 text-red-700 dark:text-red-500" />
              Me gusta
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
