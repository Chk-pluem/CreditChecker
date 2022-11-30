// const { del } = require("request")

const typeAns=[["","โปรดเลือก"],["วิชาศึกษาทั่วไป","วิชาศึกษาทั่วไป"],["วิชาเฉพาะ","วิชาเฉพาะ"],["วิชาเสรี","วิชาเสรี"]]
const creditAns=[['1','1'],['2','2'],['3','3'],['4','4']]

let countSummary=true

// const inputBoxField=document.getElementById("inputBoxField")

// unused function
// function creatOption(array,parent,condition){
//     for(let i=0;i<typeAns.length;i++){
//         let option=document.createElement('option')
//         option.setAttribute('value',array[i][0])
//         option.innerHTML=array[i][1]
//         parent.appendChild(option)
//         if(condition==array[i][0]){
//             parent.value=array[i][0]
//             // console.log('checked'+array[i][0])
//         }
//     }
// }

// function addInput(){
//     let lastIndex=inputBoxField.lastElementChild.getElementsByClassName("order")[0].innerHTML
//     let newIndex=parseInt(lastIndex)+1
//     // console.log(lastIndex)
//     let newDiv=document.createElement('div')
//     let inputText='input'+newIndex.toString()
//     newDiv.setAttribute('id',inputText)
//     newDiv.setAttribute('class','inputBox')

//     let orderDiv=document.createElement('div')
//     orderDiv.setAttribute('class','order')
//     orderDiv.innerHTML=newIndex
//     newDiv.appendChild(orderDiv)

//     let subjectDiv=document.createElement('input')
//     subjectDiv.setAttribute("type","text")
//     subjectDiv.setAttribute("name","subject")
//     subjectDiv.setAttribute("placeholder","รหัสวิชา")
//     newDiv.appendChild(subjectDiv)

//     let typeInput=document.createElement('select')
//     typeInput.setAttribute('name','type')
//     creatOption(typeAns,typeInput,"-")
//     newDiv.appendChild(typeInput)

//     let creditDiv=document.createElement('select')
//     creditDiv.setAttribute('name','credit')
//     creatOption(creditAns,creditDiv,"3")
//     newDiv.appendChild(creditDiv)

//     let delBtn=document.createElement('button')
//     delBtn.setAttribute('type','button')
//     delBtn.setAttribute('onclick',"delInput('"+inputText+"')")
//     delBtn.setAttribute('class','delBtn')
//     delBtn.innerHTML='del'
//     newDiv.appendChild(delBtn)

//     inputBoxField.appendChild(newDiv)
// }

// function delInput(id){
//     document.getElementById(id).remove()

//     let arrayOfBoxOfDiv=inputBoxField.getElementsByClassName('inputbox')
//     let arrayOfBoxOfOrder=inputBoxField.getElementsByClassName('order')
//     let arrayOfBoxOfBtn=inputBoxField.getElementsByClassName('delBtn')

//     let lenOf_arrayOfBoxOfDiv=arrayOfBoxOfDiv.length

//     for(let i=0;i<lenOf_arrayOfBoxOfDiv;i++){

//         let inputText='input'+(i+1)

//         if(arrayOfBoxOfOrder[i].innerHTML!='1'){
//             arrayOfBoxOfBtn.onclick="delInput('"+inputText+"')"
//         }
//         arrayOfBoxOfDiv[i].id=inputText
//         arrayOfBoxOfOrder[i].innerHTML=(i+1)
//     }
// }

// function getData(nameOfData){
//     let data=[]
//     let test=Object.values(document.getElementsByName(nameOfData))
//     for(let i=0;i<test.length;i++){
//         data.push(test[i].value)
//     }
//     return data
// }

function tutorial(){
    window.open("https://drive.google.com/file/d/1Gznr6_iTPipKICVevsstAPnFBK_-lBri/view?usp=sharing","_blank")
}

function threeArrayToOneDict(subjectArrayy,typeArrayy,creditArrayy){
    console.log(["three...",subjectArrayy,typeArrayy,creditArrayy])
    let subjecInfotDict ={'วิชาศึกษาทั่วไป':[],'วิชาเฉพาะ':[],'วิชาเลือกเสรี':[]}
    for(let i=0;i<typeArrayy.length;i++){
        // console.log(typeArrayy[i])
        subjecInfotDict[typeArrayy[i]].push([subjectArrayy[i],creditArrayy[i]])
    }
    return subjecInfotDict
}

// function checkNullStrArray(my_arr){
//     for(var i=0;i<my_arr.length;i++){
//         if(my_arr[i] === "")   
//            return false;
//     }
//     return true;
//  }

function chooseType(type){
    let availableType=['genEd',"courses","elec"]
    let choosedType

    if(type=="วิชาศึกษาทั่วไป"){choosedType=availableType[0]}
    else if(type=="วิชาเฉพาะ"){choosedType=availableType[1]}
    else if(type=="วิชาเลือกเสรี"){choosedType=availableType[2]}

    return choosedType
}

function renderSubSummary(type,completelyValue,inputCreditValue,conditionCreditValue){
    
    let choosedType=chooseType(type)

    // console.log(choosedType)

    let part=document.createElement('div')
    part.setAttribute('id','partOf'+choosedType)
    part.setAttribute('class',"subSummaryPart")

    let info=document.createElement('div')
    info.setAttribute('id','InfoOf'+choosedType)
    info.setAttribute('class','info')

    let title=document.createElement('h3')
    title.setAttribute('class','typeTile')
    title.innerHTML=type
    info.appendChild(title)

    let colon=document.createElement('div')
    colon.setAttribute('class','colon')
    colon.innerHTML=":"
    info.appendChild(colon)

    let completely=document.createElement('div')
    completely.setAttribute('class','completely')
    let displayCompletely='ไม่ครบ'
    let codeColor='color:#ff1616;'
    if(completelyValue){displayCompletely="ครบ";codeColor="color:#029943;"}
    completely.innerHTML=displayCompletely
    completely.setAttribute('style',codeColor)
    info.appendChild(completely)

    let inputCredit=document.createElement('div')
    inputCredit.setAttribute('class','inputCredit')
    inputCredit.innerHTML=inputCreditValue
    info.appendChild(inputCredit)

    let from=document.createElement('div')
    from.setAttribute('class','from')
    from.innerHTML="จาก"
    info.appendChild(from)

    let conditionCredit=document.createElement('div')
    conditionCredit.setAttribute('class','conditionCredit')
    conditionCredit.innerHTML=conditionCreditValue
    info.appendChild(conditionCredit)
    
    let creditText=document.createElement('div')
    creditText.setAttribute('class','creditText')
    creditText.innerHTML="หน่วยกิต"
    if(type=="วิชาเลือกเสรี"){creditText=creditText+'(หน่วยกิตในรายวิชาเสรีสามารถทบได้จาก วิชาศึกษาทั่วไป และ วิชาเฉพาะ)'}
    info.appendChild(creditText)

    // create table

    part.appendChild(info)
    return part
}

function summary(subjectArray,typeArray,creditArray){
    // let subjectArray=getData('subject')
    // let typeArray=getData('type')
    // let creditArray=getData('credit')

    let norti=document.getElementById('nortifyField')

    // check null cell
    // if(!(checkNullStrArray(subjectArray)&checkNullStrArray(typeArray)&checkNullStrArray(creditArray))){
    //     norti.innerHTML="ยังมีช่องว่าง"
    //     return 0
    // }else{
    //     norti.innerHTML=""
    // }
    
    // check repeat value



    let subjectDict=threeArrayToOneDict(subjectArray,typeArray,creditArray)
    // console.log(subjectDict)

    let subjectSummary={'วิชาศึกษาทั่วไป':{'subject':[],
                                        'creditArray':[],
                                        'creditSum':0,
                                        'completely':false},
                        'วิชาเฉพาะ':{'subject':[],
                                    'creditArray':[],
                                    'creditSum':0,
                                    'completely':false},
                        'วิชาเลือกเสรี':{'subject':[],
                                    'creditArray':[],
                                    'creditSum':0,
                                    'completely':false}}

    let keysOfSubjectDict=Object.keys(subjectDict)
    let accumCreditArray=[]
    for(let i=0;i<keysOfSubjectDict.length;i++){
        let valueOfSubjectDict=subjectDict[keysOfSubjectDict[i]]
        for(let j=0;j<valueOfSubjectDict.length;j++){
            
            let subjectName=valueOfSubjectDict[j][0]
            let nowCredit=valueOfSubjectDict[j][1]

            var accumCredit=parseInt(subjectSummary[keysOfSubjectDict[i]]['creditSum'])+parseInt(nowCredit)

            subjectSummary[keysOfSubjectDict[i]]['subject'].push(subjectName)
            subjectSummary[keysOfSubjectDict[i]]['creditArray'].push(nowCredit)
            subjectSummary[keysOfSubjectDict[i]]['creditSum']=accumCredit
        }
        accumCreditArray.push(accumCredit)
    }
    console.log(subjectSummary)

    if(accumCreditArray[0]>=30){
        subjectSummary['วิชาศึกษาทั่วไป']['completely']=true
    }
    if(accumCreditArray[1]>=94){
        subjectSummary['วิชาเฉพาะ']['completely']=true
    }
    if(accumCreditArray[2]>=6 & accumCreditArray[0]-30+accumCreditArray[1]-94>=6){
        subjectSummary['วิชาเลือกเสรี']['completely']=true
    }

    // render Summary
    if(countSummary){
        countSummary=false
        let atLeastCredit=[30,94,6]

        let summarySection=document.getElementById('summarySection')
        
        let topic=document.createElement('h1')
        topic.setAttribute('class','Topic')
        topic.setAttribute('id',"summaryTopic")
        topic.innerHTML="สรุปผลรายวิชาที่ลงทะเบียนเรียน"
        summarySection.appendChild(topic)

        for(let i=0;i<keysOfSubjectDict.length;i++){
            // console.log(keysOfSubjectDict[i])
            let subSubjectSummary=subjectSummary[keysOfSubjectDict[i]]
            let eachPart=renderSubSummary(keysOfSubjectDict[i],
                subSubjectSummary['completely'],
                subSubjectSummary['creditSum'],
                atLeastCredit[i]);
            summarySection.appendChild(eachPart)
        }  
    }
    else{
        // console.log('checked')
        let rewriteCompletely=document.getElementsByClassName('completely')
        let rewriteInputCredit=document.getElementsByClassName('inputCredit')

        // console.log(rewriteCompletely)
        for(let i=0;i<rewriteCompletely.length;i++){
            // console.log([rewriteCompletely[i].innerHTML,rewriteInputCredit[i].innerHTML])
            
            let displayCompletely="ไม่ครบ"
            if(subjectSummary[keysOfSubjectDict[i]]['completely']){displayCompletely="ครบ"}
            
            rewriteCompletely[i].innerHTML=displayCompletely
            rewriteInputCredit[i].innerHTML=subjectSummary[keysOfSubjectDict[i]]["creditSum"]
        }
    }
}

function reset(){
    countSummary=true

    let topic=document.getElementById('summaryTopic')
    topic.remove()
    let genEd=document.getElementById('partOfgenEd')
    genEd.remove()
    let courses=document.getElementById('partOfcourses')
    courses.remove()
    let elec=document.getElementById('partOfelec')
    elec.remove()
}

function setHTML(){
    let uploadedFile=document.getElementById('uploadFile').files[0]
    let tempHTML=document.getElementById('TempHTML')

    let reader = new FileReader()
    reader.onload= function(event){ 
        // console.log(reader.result) 
        tempHTML.innerHTML = event.target.result;
    }
    reader.readAsText(uploadedFile)
    // delete tempHTML
    // let sss=document.getElementsByClassName('col-sm-12')
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createTable(type_splited_subjectDict){
    
    let alignOfCode='center'
    let alignOfName='left'
    let alignOfCredit='center'

    let subSummaryPart=document.querySelectorAll('div[class="subSummaryPart"]')
    let tablePartList=[]

    for(const [type,allSubjectDict] of Object.entries(type_splited_subjectDict)){

        let typeWord=chooseType(type)

        let tablePart=document.createElement('div')
        tablePart.setAttribute('id','tableOf'+typeWord)
        tablePart.setAttribute('class','table')

        console.log(allSubjectDict)

        for(const [semester,subjectDict] of Object.entries(allSubjectDict)){

            //creater container that collect semester topic and table
            var semesterContainer=document.createElement('div')
            semesterContainer.setAttribute('id','semester'+semester)
            
            // create semester topic
            let semesterName=document.createElement('h4')
            semesterName.setAttribute('id','semesterName')
            semesterName.innerHTML='ปีการศึกษา'+semester
            semesterContainer.appendChild(semesterName)
            
            // create table
            let table=document.createElement('table')
            let tbody=document.createElement('tbody')
            // console.log(subjectDict)
            subjectDict.forEach((subject,i)=>{
                let tr=document.createElement('tr')
                
                let tdOfCode=document.createElement('td')
                tdOfCode.setAttribute('align',alignOfCode)
                tdOfCode.innerHTML=subject.code
                tr.appendChild(tdOfCode)

                let tdOfName=document.createElement('td')
                tdOfName.setAttribute('align',alignOfName)
                tdOfName.innerHTML=subject.name
                tr.appendChild(tdOfName)

                let tdOfCredit=document.createElement('td')
                tdOfCredit.setAttribute('align',alignOfCredit)
                tdOfCredit.innerHTML=subject.credit
                tr.appendChild(tdOfCredit)

                tbody.append(tr)
            })
            table.appendChild(tbody)
            semesterContainer.appendChild(table)
            tablePart.appendChild(semesterContainer)
        }
        tablePartList.push(tablePart)
        
    }
    subSummaryPart[0].appendChild(tablePartList[0])
    subSummaryPart[1].appendChild(tablePartList[1])
    subSummaryPart[2].appendChild(tablePartList[2])
}

async function getUploadFile(){
    setHTML()

    await sleep(10)

    let divMain=document.getElementById('divMain')
    let show=document.getElementById('show')
    let infoOfSemester=divMain.querySelectorAll('div[class="panel panel-primary"]')
    for(let i=0;i<infoOfSemester.length;i++){
        if(i==0){continue}
        show.appendChild(infoOfSemester[i])
        // console.log(infoOfSemester[i])
    }

    let tempHTML=document.getElementById('TempHTML')
    tempHTML.remove()
    delete tempHTML

    let nameOfSemester=show.querySelectorAll('span[style="font-size:14px;font-weight:bold;color:yellow;"]')
    // nameOfSemester.forEach(ele=>{console.log(ele.childNodes[0].data.substring(36))})

    let tableOfSubject=show.querySelectorAll('table')
    // console.log(tableOfSubject)

    let allSubjectInfo={}

    tableOfSubject.forEach((tableElement,j)=>{

        let semester=nameOfSemester[j].childNodes[0].data.substring(36)
        allSubjectInfo[semester]=[]

        let tbody=tableElement.firstChild.childNodes
        tbody.forEach((tr,i)=>{
            if(i==0){
                return;
            }
            let tdList=tr.childNodes
            let subjectCode=tdList[1].firstChild.textContent

            let td2=tdList[2].childNodes
            let engSubjectName=td2[0].textContent.substring(15)
            let thaiSubjectName=td2[2].innerHTML
            let preType=td2[6].innerHTML
            let lenOfPreType =preType.length
            let type
            if(lenOfPreType>22){type="วิชาศึกษาทั่วไป"}
            else if(lenOfPreType>13 & lenOfPreType<=22){type="วิชาเฉพาะ"}
            else if(lenOfPreType<=13){type="วิชาเลือกเสรี"}

            let td3=tdList[3].childNodes
            let credit=td3[2].textContent.substring(0,1)

            // console.log([semester,
            //             subjectCode,
            //             engSubjectName,
            //             thaiSubjectName,
            //             type,
            //             credit])
            
            allSubjectInfo[semester].push({
                "code":subjectCode,
                "thaiName":thaiSubjectName,
                "type":type,
                "credit":credit})
            
        })
    })
    // console.log(allSubjectInfo)

    let subjectArray = []
    let typeArray = []
    let creditArray =[]
    for(const [semester,eachYearSubjectList] of Object.entries(allSubjectInfo)){
            eachYearSubjectList.forEach((eachSubject)=>{
            subjectArray.push(eachSubject.code)
            typeArray.push(eachSubject.type)
            creditArray.push(eachSubject.credit)
        })
    }
    console.log([subjectArray,typeArray,creditArray])

    summary(subjectArray,typeArray,creditArray)

    let type_splited_subjectDict={'วิชาศึกษาทั่วไป':{},
                                    'วิชาเฉพาะ':{},
                                    'วิชาเลือกเสรี':{}}

    for(const [semester,eachYearSubjectList] of Object.entries(allSubjectInfo)){
        type_splited_subjectDict['วิชาศึกษาทั่วไป'][semester]=[]
        type_splited_subjectDict['วิชาเฉพาะ'][semester]=[]
        type_splited_subjectDict['วิชาเลือกเสรี'][semester]=[]
        eachYearSubjectList.forEach((subjectDict,i)=>{
            type_splited_subjectDict[subjectDict.type][semester].push({
                'code':subjectDict.code,
                'name':subjectDict.thaiName,
                'credit':subjectDict.credit
            })
        })
    }

    console.log(type_splited_subjectDict)
    createTable(type_splited_subjectDict)
}

