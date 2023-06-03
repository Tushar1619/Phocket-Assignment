import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1
        className='text-center text-2xl mt-3 font-bold'
      >Welcome to the App</h1>
      <nav>
        <ul className='flex justify-evenly  mt-28'>
          <li>
            <Link href="/users">
              <div >
               
                <img  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Card image cap" 
                  className='w-56 h-56'
                />
                
                  <div className='text-center'>
                   
              <span className='font-bold text-lg'>Users</span>
                  </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/posts">
            <div className='mt-4'>
               
               <img  src="https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg" alt="Card image cap" 
                 className='w-52 h-52 rounded-full'
               />
               
                 <div className='text-center'>
                  
             <span className='font-bold text-lg'>Posts</span>
                 </div>
             </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
