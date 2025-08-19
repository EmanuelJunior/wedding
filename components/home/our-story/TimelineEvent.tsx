
interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  image: string;
  isLeft?: boolean;
}

export function TimelineEvent({ date, title, description, image, isLeft = false }: TimelineEventProps) {
  return (
    <div className={
      `flex flex-col md:flex-row items-center w-full my-8 relative gap-6 
      ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`
    }>
      {/* Content Card */}
      <div className="w-full md:w-1/2 px-4">
        <div className={
          `transform transition-all duration-500 hover:scale-105
          bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl`
        }>
          <span className="text-red-800 dark:text-red-500 font-semibold">{date}</span>
          <h3 className="text-2xl font-semibold mt-2 font-pinyon-script dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Image */}
      <div className="w-full md:w-1/2 px-4">
        <img
          src={image}
          alt={title}
          className={
            `w-full h-64 object-cover rounded-lg shadow-lg
            transform transition-all duration-500 hover:scale-105`
          }
        />
      </div>
    </div>
  );
}