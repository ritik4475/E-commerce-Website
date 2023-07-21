import React, { useEffect, useState } from "react";

const Myimage = ({ img = [{ url: "" }] }) => {


    const [mainimg, setmainimg] = useState(img[0])



    return (
            <div className="flex p-4 cursor-pointer">
            <div >               
             { 
                    img.map((ele,i ) => {
                        return (
                            <div key={i} className=" p-3 w-[10rem]">
                                <img src={ele.url} alt="img"  onClick={()=>{ setmainimg(ele)}} className=" rounded-lg" />
                            </div>
                        )
                    })
                }
                </div>

                <div>
                
                  <img src={mainimg.url} alt={mainimg.filename} className=" mt-[6rem] w-fit rounded-lg" />
                
                </div>
                
            </div>
        
    )
}

export default Myimage