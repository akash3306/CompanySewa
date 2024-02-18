import React from 'react';

export const Question = () => {
  const ansheight = ['100px','80px','100px','50px','100px','100px','140px','140px','680px','370px','200px','140px','80px'];
  var ans = 0;
  const q1 = () => {
    for(let i=0;i<=12;i++){
      if(ans == i){
        continue;
      }
      document.getElementsByClassName('ans')[i].style.height = "0px";
    }
    if(document.getElementsByClassName('ans')[ans].style.height == ansheight[ans]){
      document.getElementsByClassName('ans')[ans].style.height = "0px";
    }
    else{
      document.getElementsByClassName('ans')[ans].style.height = ansheight[ans];
    }
  };
  const setAns =(value) => {
    ans = value;
  }
  return (
    <div className='questbox'>

        <div className='FRQ'>Frequently Asked Questions</div>

        <div className='questioins'>
            <div className='q1' onClick = {() => {setAns(0);q1();}}>
              <div className='ques'>Is the company registration process completely online in Nepal?</div>
              <div className='ans'>No. Registering a company in Nepal is not a fully online process. Although certain parts of the process, such as checking company names, can be completed online.<br></br>Other steps require physical documentation and in-person visits to government offices OCR and IRD.</div>
            </div>
            <div className='q1' onClick = {() => {setAns(1);q1();}}>
              <div className='ques'>How to check company name in Nepal?</div>
              <div className='ans'>To verify if your company name is available for registration, simply go to the OCR website. Click on the "check name" button. Here is a complete<br></br> guide on how to check company name, including a video tutorial.</div>
            </div>
            <div className='q1' onClick = {() => {setAns(2);q1();}}>
          <div className='ques'>How many days does it take to register a company in Nepal?</div>
          <div className='ans'> Usually, it takes about 7 to 10 business days to register a company in Nepal. But, after company name approval, the registration process can be completed within 2 to 3 days.<br></br>The duration of the registration process can also depend on the workload of government offices and the processing time for applications.</div>
            </div>
            <div className='q1' onClick = {() => {setAns(3);q1();}}>
          <div className='ques'>Can foreigners register a company in Nepal?</div>
          <div className='ans'>Yes, foreigners can register a company in Nepal.</div>
            </div>
            <div className='q1' onClick = {() => {setAns(4);q1();}}>
          <div className='ques'>What are the requirements for a foreigner to register a company in Nepal?</div>
          <div className='ans'> As a foreigner, to register a company in Nepal, you'll require a valid visa, passport, and business plan. Additionally, you must appoint at least one Nepalese citizen as a director.<br></br>View the required documents and legal requirements for company registration in Nepal </div>
            </div>
            <div className='q1' onClick = {() => {setAns(5);q1();}}>
          <div className='ques'>What is the minimum amount of capital required to start a company in Nepal?</div>
          <div className='ans'>To register a private limited company in Nepal, you must have a minimum authorized share capital of NPR 100,000 (approximately USD 760).<br></br>If you wish to register a public limited company, you must have a minimum authorized share capital of NPR 1,00,00,000 (approximately USD 76,400).</div> 
            </div>
            <div className='q1' onClick = {() => {setAns(6);q1();}}>
          <div className='ques'>What are the Types of Companies in Nepal</div>
          <div className='ans'>According to the 2063 B.S. (2006) Act, there are three types of companies that can be registered in Nepal:
          <ul>
            <li>Private Limited Company</li>
            <li>Public Limited Company</li>
            <li>Non-profit Company</li>
        </ul> 
        </div>
            </div>
            <div className='q1' onClick = {() => {setAns(7);q1();}}>
          <div className='ques'>How much does it cost to register company in Nepal?</div>
          <div className='ans'> The registration costs of pvt ltd company in Nepal depend on the amount of the authorized share capital and the registration fee.<br></br>For a private company, the minimum capital is NPR. 1,00,000 and the registration fee is NPR. 1,000. For a public company, the minimum capital is NPR. 1,00,00,000 and the registration fee is NPR. 15,000.<br></br>Discover the registration fees for private and public companies in Nepal. </div>
            </div>
            <div className='q1' onClick = {() => {setAns(8);q1();}}>
          <div className='ques'>What are the government registration fees for private company registration in Nepal?</div>
          <div className='ans'>
          <table>
            <tr>
                <th>S.N.</th>
                <th> Amount of Authorized Capital</th>
                <th>Registration Fee</th>
            </tr>
            <tr>
                <td>1.</td>
                <td>Up to NPR. 1,00,000</td>
                <td>NPR. 1,000</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>NPR. 1,00,001 to 5,00,000</td>
                <td>NPR. 4,500</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>NPR. 5,00,001 to 25,00,000</td>
                <td>NPR. 9,500</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>NPR. 25,00,001 to 1,00,00,000</td>
                <td>NPR. 16,000</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>NPR. 1,00,00,001 to 2,00,00,000</td>
                <td>NPR. 19,000</td>
            </tr>
            <tr>
                <td>6.</td>
                <td>NPR. 2,00,00,001 to 3,00,00,000</td>
                <td>NPR. 22,000</td>
            </tr>
            <tr>
                <td>7.</td>
                <td>NPR. 3,00,00,001 to 4,00,00,000</td>
                <td>NPR. 25,000</td>
            </tr>
            <tr>
                <td>8.</td>
                <td>NPR. 4,00,00,001 to 5,00,00,000</td>
                <td>NPR. 28,000</td>
            </tr>
            <tr>
                <td>9.</td>
                <td>NPR. 5,00,00,001 to 6,00,00,0000</td>
                <td>NPR. 31,000</td>
            </tr>
            <tr>
                <td>10.</td>
                <td>NPR. 6,00,00,001 to 7,00,00,000</td>
                <td>NPR. 34,000</td>
            </tr>
            <tr>
                <td>11.</td>
                <td>NPR. 7,00,00,001 to 8,00,00,000</td>
                <td>NPR. 37,000</td>
            </tr>
            <tr>
                <td>12.</td>
                <td>NPR. 8,00,00,001 to 9,00,00,000</td>
                <td>NPR. 40,000</td>
            </tr>
            <tr>
                <td>13.</td>
                <td>NPR. 9,00,00,001 to 10,00,00,000</td>
                <td>NPR. 43,000</td>
            </tr>
            <tr>
                <td>14.</td>
                <td>NPR. 10,00,00,000</td>
                <td>30 for each 1,00,000</td>
            </tr>

          </table>
          </div>
            </div>
            <div className='q1' onClick = {() => {setAns(9);q1();}}>
          <div className='ques'>What are the government registration fees for public company registration in Nepal?</div>
          <div className='ans'>
          <table>
          <tr>
                <th>S.N.</th>
                <th> Amount of Authorized Capital (in NPR)</th>
                <th>Registration fee ( in NPR)</th>
            </tr>
            <tr>
                <td>1.</td>
                <td>Up to 1,00,00,000</td>
                <td>NPR. 15,000</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>1,00,00,001 to 10,00,00,000</td>
                <td>NPR. 40,000</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>10,00,00,001 to 20,00,00,000</td>
                <td>NPR. 70,000</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>20,00,00,001 to 30,00,00,000</td>
                <td>NPR. 1,00,000</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>30,00,00,001 to 40,00,00,000</td>
                <td>NPR. 1,50,000</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>40,00,00,001 to 50,00,00,000</td>
                <td>NPR. 1,60,000</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>Above 50,00,00,000</td>
                <td>3000 for each 1,00,000</td>
            </tr>
            
            </table> 
            </div>
            </div>
            <div className='q1' onClick = {() => {setAns(10);q1();}}>
          <div className='ques'>What is the complete process and step of company registration in Nepal? </div>
          <div className='ans'>
          <ul>
            <li>Step 1 – Company name reservation on the OCR website.</li>
            <li>Step 2 – Repair and submit document - Memorandum of Association (MOA) and Articles of Association (AOA). </li>
            <li>Step 3 – Issue company registration certificate.</li>
            <li>Step 4 – Tax Registration (PAN/VAT) in Inland Revenue Department.</li>
            <li>Step 5 – Make a company stamp.</li>
            <li>Step 6 – Open a company bank account.</li>
          </ul>
          </div>
            </div>
            <div className='q1' onClick = {() => {setAns(11);q1();}}>
          <div className='ques'>What is the Memorandum of Association (MoA)?</div>
          <div className='ans'>The MoA is a very important document that's required when registering a new company in Nepal.<br></br>The MoA explains what the company wants to achieve, like its goals and mission. It also tells the shareholders what their rights and responsibilities<br></br> are. Learn more about MoA.</div>
            </div>
            <div className='q1' onClick = {() => {setAns(12);q1();}}>
          <div className='ques'>What is the Articles of Association (AoA)? </div>
          <div className='ans'> The AoA is a document that tells you the rules and regulations of your company. It's really important because it tells everyone what they're allowed to do and what they're responsible for. Learn more about AoA.</div>
         </div>
         </div>
         </div>
  )
}
