import React, { useEffect, useState } from 'react';

export const Price = () => {

  const [exploredata, SetExploredata] = useState([]);
  const [explorecategory, setExplorecategory] = useState([]);
  const [explorecharges, setExplorecharges] = useState([]);
  const [extracharg,setExtracharg] = useState([]);
  useEffect(() => {
    async function explorecontent() {
      const response = await fetch('https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
      const responsedata = await response.json();
      SetExploredata(responsedata.acf);
      setExplorecategory(responsedata.acf.table_categories);
      setExplorecharges(responsedata.acf.charge);
      setExtracharg(responsedata.acf.extra_charge_content);
      //console.log(responsedata.acf.extra_charge_content);
    }
    explorecontent();



  }, [])

  // console.log(exploredata);

  return (

    <section id=''>
      <div className='container price_flex'>
        <div className='price_flex_A'>
          <div className='flex_Aa'>

            <h3>{exploredata.price_title}</h3>


            <div className='flex_Aa_content'>
              {exploredata.pricing_content}
            </div>
          </div>



          <div>
            <div className='flex_Ab'>
              <h3>Extra Charges</h3>
              {/* <h5>Mentionable additional charges include</h5> */}
              <div className='charges_table'>
                {/* <ul className='charges_ul'> */}
                <div className='charges_ul'><i className="fa fa-check-circle-o mt-2" aria-hidden="true"></i> <span>{extracharg.extra_charge_1}</span></div>
                <div className='charges_ul'><i className="fa fa-check-circle-o mt-2" aria-hidden="true"></i> <span>{extracharg.extra_charge_2}</span></div>
                <div className='charges_ul'><i className="fa fa-check-circle-o mt-2" aria-hidden="true"></i><span>{extracharg.extra_charge_3}</span></div>
                <div className='charges_ul'><i className="fa fa-check-circle-o mt-2" aria-hidden="true"></i><span>{extracharg.extra_charge_4}</span></div>
                {/* <li>{expdata.extra_charge_content.extra_charge_4}</li>
                <li>{expdata.extra_charge_content.extra_charge_5}</li> */}
                {/* </ul> */}
              </div>
            </div>
          </div>
        </div>

        <div className='price_flex_B'>
          <div className='Payment-main'>
            <h3>{exploredata.payment_plan_title}</h3>

            <div className='extra-ct'>
              <table className='table table-extra table-bordered table-striped categry-tble'>
                <thead>
                  <tr>
                    <th scope="col">{exploredata.category_title} </th>
                    <th scope="col">{exploredata.charge_title}</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td>{explorecategory.line14} </td>
                    <td>{explorecharges.charge_14}</td>
                  </tr>
                  <tr>
                    <td><span>1</span>{explorecategory.line_1} </td>
                    <td>{explorecharges.charge_1}</td>
                  </tr>



                  <tr>
                    <td><span>2</span>{explorecategory.line_2}</td>
                    <td>{explorecharges.charge_2}</td>
                  </tr>
                  <tr>
                    <td><span>3</span>{explorecategory.line_3}</td>
                    <td>{explorecharges.charge_3}</td>
                  </tr>

                  <tr>
                    <td><span>4</span>{explorecategory.line_4}</td>
                    <td>{explorecharges.charge_4}</td>
                  </tr>
                  <tr>
                    <td><span>5</span>{explorecategory.line_5}</td>
                    <td>{explorecharges.charge_5}</td>
                  </tr>
                  <tr>
                    <td><span>6</span>{explorecategory.line_6}</td>
                    <td>{explorecharges.charge_6}</td>
                  </tr>
                  <tr>
                    <td><span>7</span>{explorecategory.line_7}</td>
                    <td>{explorecharges.charge_7}</td>
                  </tr>
                  <tr>
                    <td><span>8</span>{explorecategory.line_8}</td>
                    <td>{explorecharges.charge_8}</td>
                  </tr>
                  <tr>
                    <td><span>9</span>{explorecategory.line_9}</td>
                    <td>{explorecharges.charge_9}</td>
                  </tr>
                  <tr>
                    <td><span>10</span>{explorecategory.line_10}</td>
                    <td>{explorecharges.charge_10}</td>
                  </tr>
                  <tr>
                    <td><span>11</span>{explorecategory.line_11}</td>
                    <td>{explorecharges.charge_11}</td>
                  </tr>
                  <tr>
                    <td><span>12</span>{explorecategory.line_12}</td>
                    <td>{explorecharges.charge_12}</td>
                  </tr>
                  <tr>
                    <td>{explorecategory.line_13}</td>
                    <td>{explorecharges.charge_13}</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
