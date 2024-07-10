
import {mathCurriculum} from '@/messages/mathCurriculum.json'


const ChapterPage = ({params}:{params:{id:string}}) => {
  const { id } = params;

  const chapter = mathCurriculum.find(c => c.id === id);

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  console.log(chapter)

  return (
    <div>
      Working on this page
    </div>
  );
};

export default ChapterPage;