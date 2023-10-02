export default function ProductPurchase() {
    const productPurchases = [
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:1
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:2
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:3
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:4
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:5
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:6
        }
    ]
    return (
        <div className="mx-auto ">
            <div className="shadow shadow-gray-600 bg-white  m-8">
                <p className="pl-8 pt-8 font-bold">Frequently purchased togrther</p>
            <div className="flex flex-wrap -mx-6 px-8">
                {
                    productPurchases.map(data => (
                        <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/6 p-4">
                        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                        <div className="relative pb-48 overflow-hidden">
                          <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                        </div>
                        <div className="p-4">
                          {/* <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span> */}
                          <h2 className="mt-2 mb-2  font-bold">{data.name}</h2>
                          <p className="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
                          <div className="mt-3 flex items-center">
                            <span className="text-sm font-semibold"></span>&nbsp;<span className="font-bold text-xl">45,00</span>&nbsp;<span className="text-sm font-semibold">€</span>
                          </div>
                        </div>
                   
                      </a>
                      </div>
                    ))
                }
             
              </div>
            </div>
             
            </div>
    )

}