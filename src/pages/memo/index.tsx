import './index.less'
import HasMemo from './HasMemo';
import NoMemo from './NoMemo';

const Memo: React.FC = () => {

  return <div className='memo-container'>
    <div>
      <h1>NoMemo:</h1>
      <NoMemo />
    </div>
    <div>
      <h1>HasMemo:</h1>
      <HasMemo/>
    </div> 
  </div>
}

export default Memo