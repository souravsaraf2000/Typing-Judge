import './App.css';

import React,{ Component } from 'react';

import {Paragraph} from './components/show_paragraph/paragraph.component';

import {TypePara} from './components/type_paragraph/typeParagraph.component';

import {Result} from './components/result_display/result.component';

import {Instructions} from './components/instructions/instruction.component';

class App extends Component {
  state = {
    para:"",
    paraNo:-1,
    error: false,
    enteredPara:"",
    disabled: true,
    accuracy : 0,
    correctCount : 0,
    incorrectCount: 0,
    flag: 0,
    startTime: '',
    wpm : -1,
    show : 'block'
  }
  paragraphTexts = [
    "'Alcohol' is taken in almost all cool and cold climates, and to a very much less extent in hot ones. Thus, it is taken by people who live in the Himalaya Mountains, but not nearly so much by those who live in the plains of India. Alcohol is not necessary in any way to anybody. The regular use of alcohol, even in small quantities, tends to cause mischief in many ways to various organs of the body. It affects the liver, it weakens the mental powers, and lessens the general energy of the body. In addition damage to the central nervous system and peripheral nervous system can occur from chronic alcohol abuse.",
    "The bird I like most is the parrot. The parrot is a very beautiful bird. Its feathers are green. It has a red beak. Its beak is curved. Round the neck of a parrot there are black rings. Overall it is a lovely looking bird. It eats grains, fruits, leaves seeds, pears, nuts, mangoes and boiled rice etc. The Parrot is a talking bird. It can imitate the human voice. It is found in almost all the warm countries. It generally lives in the hollows of trees. Some people keep it in a small cage which is not good. Some people train parrots to do wonderful things.",
    "'Acharya Vinoba Bhave' was born on September 11, 1895 in Kolaba, Maharashtra. His real name was Vinayaka Rao Bhave. His father's name was Narahari Shambhu Rao. His mother;s name was Rukmini Devi. Vinoba Bhave's early education was at Baroda. Later, he studied at Varanasi. He was interested mainly in philosophical literature. He joined Sabarmati ashram and became one of the closest associates of Mahatma Gandhi. Vinoba Bhave was a great freedom fighter. He was actively involved in the 'Nagpur Salt Satyagraha', the 'Dandi March' and the 'Temple Entry Movement' in Kerala. He was chosen by Gandhi to be the first Satyagrahi for the individual civil disobedience movement. Vinoba Bhave died on 15 November 1982 at the age of 87. He was a spiritual visionary, whose spirituality had a pragmatic stance with intense concern for the deprived. He is best known for the 'Bhoodan Movement'. He also led the 'Sarvodaya movement'. His contribution to the history of nonviolent movement remains significant. Vinoba Bhave was a learned scholar. He knew eighteen languages. He wrote several books of international fame. In 1958 Vinoba was the first recipient of the international Ramon Magsaysay Award for Community Leadership. He was awarded the 'Bharat Ratna' posthumously.",
    "'Early to bed and early to rise, keeps a man healthy, wealthy and wise'. The great advantage of early rising is the good start it gives us in our day’s work. In the early morning the mind is fresh and there are few sounds so that work done at that time is generally well done. The early riser also finds time to take some exercise in the fresh morning air, and‚ this exercise supplies him with a fund of energy that will last until the evening. By beginning so early, he knows that he has plenty of time to do thorough all the work he can be expected to do, and is not tempted to hurry over any part of it. All his working being finished in good time, he has a long interval of rest in the evening before he goes to bed.",
    "Summer vacations were going to start and we had started to plan where to go. Me and my brother were very excited. My father did all the necessary arrangements such as travelling tickets, accomodation, type of food we will have etc. We decided to go to Jaipur. We set off for the railway station at around 06.00 p.m. and boarded the train at 06.30 p.m. We reached Jaipur the next morning. We went to our hotel, had breakfast and in the evening took our tour bus of the Department of Tourism for visiting the sights. Our first destination was the museum. After seeing the museum, the bus took us to the palace Hawa Mahal and Jantar Mantar. The next day we proceeded to Amer Fort and our last destination was Lakshmi Narayan Temple. Everyday we used to see many places in Jaipur. We also went to see the handicraft festival. On Saturday, it was time for us to leave but none of us wanted to go back, but we had to go. We returned home and told our friends about the excursion. This was a very exciting excursion indeed!",
    "Test Paragraph"
  ]
  clearTextBox = () => {
    document.getElementById('textBox').value="";
    this.setState({disabled:true,error:false,startTime:'',accuracy:0,flag:0})
  }
  paragraphAllotment = () => {
    let n = Math.floor(Math.random() * 6)
    if(n===this.state.paraNo)
      if(n===0)
        n=1;
      else if(n===4)
        n=3;
      else
        n=n+1;
    const newPara = this.paragraphTexts[n];
    this.setState({para:newPara,paraNo:n});
    this.clearTextBox();
  }
  countWords = (paragraph) => {
    return paragraph.split(' ').length;
  }
  componentDidMount(){
    this.paragraphAllotment();
  }
  changeFunc = e => {
    let len = e.target.value.length;
    if(this.state.flag === 0)
      this.setState({startTime: new Date()});
    if(len>0)
      this.setState({disabled:false})
    else
      this.setState({disabled:true})
    let slicedPara = this.state.para.slice(0,len);
    if(e.target.value!==slicedPara)
      this.setState({error:true,enteredPara:e.target.value})
    else
      this.setState({error:false,enteredPara:e.target.value})
    this.setState({flag : 1});
  }
  result = () => {
    let enteredValue = this.state.enteredPara.split(' ');
    let givenValue = this.state.para.split(' ');
    let enteredLength = this.countWords(this.state.enteredPara);
    let givenLength = this.countWords(this.state.para);
    let count=0;
    if(enteredLength > givenLength)
    {
      alert("Extra Words Typed !!!")
      return -1;
    }
    else if(enteredLength < givenLength)
    {
      alert("Some words are missing !!!")
      return -1;
    }
    else
    {
      for(let i=0;i<enteredLength;i++)
      {
        if(enteredValue[i]!==givenValue[i])
          count= count + 1;
      }
    }
    let correct = enteredLength - count;
    let accuracy = (correct/enteredLength)*100;
    accuracy = accuracy.toFixed(2);
    let time = ((new Date() - this.state.startTime)/1000)/60;
    this.setState({accuracy:accuracy,correctCount:correct,incorrectCount:count,wpm:Math.floor(enteredLength/time)});
  }
  clickEvent = () => {
    this.setState({show:'none'})
  }
  render()
  {
    return(
      <div className="App">
        <Instructions disp={this.state.show} click={this.clickEvent}/>
        <div className="main-content" style={this.state.show==='none'?{display:'block'}:{display:'none'}}>
          <h1>Typing Judge</h1>
          <Paragraph para={this.state.para}/>
          <button className="btn btn-info" onClick={this.paragraphAllotment}>Change Paragraph</button>
            <TypePara changeFunc={this.changeFunc} error={this.state.error} />
            <div className="button-div">
              <button className="btn btn-secondary marginRight" onClick={this.clearTextBox} 
                style = {this.state.disabled?{cursor:'not-allowed'}:{cursor:'pointer'}}
                disabled={this.state.disabled}>Reset</button>
              <button className="btn btn-success" 
                style = {{cursor:'pointer'}}
                onClick={this.result}>Check
              </button>
            </div>  
            {
              this.state.accuracy?
              <Result incorrect={this.state.incorrectCount} correct={this.state.correctCount} count={this.countWords(this.state.para)} accuracy={this.state.accuracy} wpm={this.state.wpm}
              />:""
            }
        </div>
      </div>
    );
  }
}

export default App;
