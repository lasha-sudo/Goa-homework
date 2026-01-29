
function Section() {
    let array = [
        {title: 'tibisi bank',
         text:'tibisi bank is best bank you have designed card'
        }
        ,
        {title: 'tibisi bank',
         text:'tibisi bank is best bank you have designed card'
        }
        ,
        {title: 'tibisi bank',
         text:'tibisi bank is best bank you have designed card'
        }
        ,
        {title: 'tibisi bank',
         text:'tibisi bank is best bank you have designed card , you should get whatever you want from this bank'
        }
        
    ]


    return(
        <div className="bg-gray-500 py-6 px-6" >

            <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1">
            {array.map((item , i)=> (
                <div key={i} className="p-20 bg-white rounded-lg  ">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm font-light">{item.text}</p>
                </div>

            ))}
            </div>
            

            
        </div>
    )
}

export default Section;