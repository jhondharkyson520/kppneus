import { Link } from 'react-router-dom';
import LineChart  from '../../components/charts/chartLineLiquid'
import PieChart from '../../components/charts/chartPie';
import {AiFillPlusCircle, AiFillMinusCircle, AiFillDollarCircle, AiTwotoneShop} from 'react-icons/ai'
import {BiSolidShoppingBags} from 'react-icons/bi'

export function Dashboard(){
    const chartLineData = [
        { x: 'Janeiro', y: 12.50 },
        { x: 'Fevereiro', y: 19.50 },
        { x: 'Março', y: 3.50 },
        { x: 'Abril', y: 5.55 },
        { x: 'Maio', y: 2.14 },
      ];

      const chartPieData = [
        { category: 'Vendas', value: 30 },
        { category: 'Despesas', value: 45 },
        { category: 'Lucro', value: 25 },
      ];
    
      return (
        <div className="container px-10">
          <div className='mt-10 mb-10 flex w-full justify-center items-center gap-5'>
            <Link to='/dashboard/entrance'>
              <div 
                className='bg-white p-5 rounded-2xl cursor-pointer w-56  items-center justify-center 
                flex hover:scale-105 hover:transition-all'
              >
                Entrada
                <AiFillPlusCircle className='ml-1' size={25} color='#4CAF50'/>
              </div>
            </Link>

            <Link to='/dashboard/expenses'>
              <div 
                className='bg-white p-5 rounded-2xl cursor-pointer w-56  items-center justify-center 
                flex hover:scale-105 hover:transition-all'
              >
                Despesas
                <AiFillMinusCircle className='ml-1' size={25} color='#F54336'/>
              </div>
            </Link>

            <Link to='/dashboard/balance'>
              <div 
                className='bg-white p-5 rounded-2xl cursor-pointer w-56  items-center justify-center 
                flex hover:scale-105 hover:transition-all'
              >
                Saldo
                <AiFillDollarCircle className='ml-1' size={25} color='#05796B'/>
              </div>
            </Link>

            <Link to='/dashboard/sales'>
              <div 
                className='bg-white p-5 rounded-2xl cursor-pointer w-56  items-center justify-center 
                flex hover:scale-105 hover:transition-all'
              >
                Vendas
                <BiSolidShoppingBags className='ml-1' size={25} color='#2196F3'/>
              </div>
            </Link>

            <Link to='/dashboard/products'>
              <div 
                className='bg-white p-5 rounded-2xl cursor-pointer w-56  items-center justify-center 
                flex hover:scale-105 hover:transition-all'
              >
                Produtos
                <AiTwotoneShop className='ml-1' size={25} color='#FFBE23'/>
              </div>
            </Link>            
          </div>

          <div className='flex gap-8 p-5'>
            <div className='w-1/2 bg-white rounded-xl'>
              <h1 className='text-center mt-4 mb-5'>Receita líquida mensal</h1>
              <LineChart data={chartLineData} />
            </div>

            <div className='w-1/2 bg-white rounded-xl'>
              <h1 className='text-center mt-4 mb-5'>Balanço mensal</h1>
              <PieChart data={chartPieData} />
            </div>
          </div>
        </div>
      );
    }