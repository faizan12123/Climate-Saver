class Quiz extends Phaser.Scene {

	constructor() {
		super("Quiz");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// quiz_background
		const quiz_background = this.add.image(403, 309, "quiz-background");
		quiz_background.scaleX = 0.68;
		quiz_background.scaleY = 0.783;

		var buttonClicked = this.sound.add("buttonOnClick");
		var buttonRight = this.sound.add("sound-right");
		var buttonWrong = this.sound.add("sound-wrong");

		// button_back
		const button_back = this.add.image(88, 87, "button-back");
		button_back.scaleX = 0.15;
		button_back.scaleY = 0.15;
		button_back.setInteractive();
		button_back.on("pointerdown", () => {
			backgroundMusic.stop();
			buttonClicked.play();
			this.scene.start("MainMenu");
		}).on("pointerover", () => {
      		button_back.scale += 0.05;
    	}).on("pointerout", () => {
			button_back.scaleX = 0.15;
			button_back.scaleY = 0.15;
		});

		// button_facts
		const button_facts = this.add.image(88, 536, "button-facts");
		button_facts.scaleX = 0.35;
		button_facts.scaleY = 0.35;

		// m_container
		const m_container = this.add.container(214, 96);
		m_container.scaleX = 1.21;
		m_container.scaleY = 1.1;
		m_container.visible = false;

		// quiz_box
		const quiz_box = this.add.image(203, 152, "quiz-box");
		quiz_box.scaleX = 0.36;
		quiz_box.scaleY = 0.42;
		m_container.add(quiz_box);

		// choicebox_4
		const choicebox_4 = this.add.image(194, 392, "answer-textbox");
		choicebox_4.scaleX = 2;
		choicebox_4.scaleY = 0.78;
		choicebox_4.setInteractive();
		m_container.add(choicebox_4);

		// choice_4
		const choice_4 = this.add.text(6, 374, "", {});
		choice_4.text = "Choice 4\n";
		choice_4.setStyle({ "baselineY":1.2,"color": "#000000ff", "fontFamily": "Poppins", "fontSize": "20px" });
		m_container.add(choice_4);

		// choicebox_3
		const choicebox_3 = this.add.image(194, 320, "answer-textbox");
		choicebox_3.scaleX = 2;
		choicebox_3.scaleY = 0.78;
		choicebox_3.setInteractive();
		m_container.add(choicebox_3);

		// choice_3
		const choice_3 = this.add.text(8, 301, "", {});
		choice_3.text = "Choice 3\n";
		choice_3.setStyle({ "baselineY":1.2,"color": "#000000ff", "fontFamily": "Poppins", "fontSize": "20px" });
		m_container.add(choice_3);

		// choicebox_2
		const choicebox_2 = this.add.image(194, 245, "answer-textbox");
		choicebox_2.scaleX = 2;
		choicebox_2.scaleY = 0.78;
		choicebox_2.setInteractive();
		m_container.add(choicebox_2);

		// choice_2
		const choice_2 = this.add.text(12, 227, "", {});
		choice_2.text = "Choice 2\n";
		choice_2.setStyle({ "baselineY":1.2,"color": "#000000ff", "fontFamily": "Poppins", "fontSize": "20px" });
		m_container.add(choice_2);

		// choicebox_1
		const choicebox_1 = this.add.image(194, 172, "answer-textbox");
		choicebox_1.scaleX = 2;
		choicebox_1.scaleY = 0.78;
		choicebox_1.setInteractive();
		m_container.add(choicebox_1);

		// choice_1
		const choice_1 = this.add.text(14, 155, "", {});
		choice_1.text = "Choice 1\n";
		choice_1.setStyle({ "baselineY":1.2,"color": "#000000ff", "fontFamily": "Poppins", "fontSize": "20px" });
		m_container.add(choice_1);

		// question-input
		const question_input = this.add.text(-2, -35, "", {});
		question_input.text = "Question appear here\n";
		question_input.setStyle({ "baselineY":1.2,"color": "#000000ff", "fontFamily": "Poppins", "fontSize": "20px" });
		question_input.setWordWrapWidth(430);
		m_container.add(question_input);

		// start_quiz
		const start_quiz = this.add.container(-51, -42);
		start_quiz.scaleX = 1.26;
		start_quiz.scaleY = 1.12;

		// quiz_box_start
		const quiz_box_start = this.add.image(408, 288, "quiz-box-start");
		quiz_box_start.scaleX = 0.33;
		quiz_box_start.scaleY = 0.39;
		start_quiz.add(quiz_box_start);

		// button_start
		const button_start = this.add.image(400, 417, "main-menu-button-start");
		button_start.scaleX = 0.35;
		button_start.scaleY = 0.35;
		start_quiz.add(button_start);
		button_start.setInteractive();
		button_start.on("pointerdown", () => {
			start_quiz.visible = false;
			m_container.visible = true;
			buttonClicked.play();
			startQuiz();
		}).on("pointerover", () => {
      		button_start.scale += 0.12;
    	}).on("pointerout", () => {
			button_start.scaleX = 0.35;
			button_start.scaleY = 0.35;
		});

		// quiz-message
		const quiz_message = this.add.text(225, 255, "", {});
		quiz_message.text = "Test your knowledge about the environment around you, press start to begin.\n";
		quiz_message.setStyle({ "align": "center", "baselineY":1.2,"color": "#000000ff", "fontFamily": "Poppins", "fontSize": "20px" });
		quiz_message.setWordWrapWidth(400);
		start_quiz.add(quiz_message);
		
		// score_print
		const score_print = this.add.text(261, 247, "", {});
		score_print.text = "Score goes here";
		score_print.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Poppins", "fontSize": "30px", "stroke": "" });
		score_print.visible = false;
		start_quiz.add(score_print);


		//quiz logic
		let questions = [
			{
				question: 'What is the process of reusing material?',
				choice1:'Reduce', choice2:'Reuse', choice3:'Recycle', choice4:'All of the above',
				answer:'All of the above',
			}, {
				question: 'How much pound each day can an average person generate?',
				choice1:'1', choice2:'2', choice3:'4', choice4:'5',
				answer:'4',
			}, {
				question: 'In United States, about 75% of waste stream can be recycled. How much is actually recycled?',
            	choice1:'90%', choice2:'10%', choice3:'60%', choice4:'30%',
				answer:'30%',
			},{
				question: 'How much energy can a ton of recycled office paper save, equivalent to gasoline gallons.',
                choice1:'122 gallons', choice2: '222 gallons', choice3: '322 gallons', choice4: '422 gallons',
				answer: '322 gallons',
			},{
				question: 'City uses too much energy and contribute to climate change.',
				choice1: 'True', choice2: 'False', answer: 'True',
			},{
				question: 'How much plastic was recycled out of 35 million tons of plastic in 2018?',
                choice1:'25.2%',  choice2:'8.7%', choice3: '60.4%', choice4: '5.5%', answer:'8.7%',
			},{
				question: 'What type of product can\'t be recycled?',
				choice1:'Food', choice2:'Cardboard', choice3:'Plastic', choice4:'Glass',
				answer:'Food',
			},{
				question: 'Why shouldn\'t broken glass be recycled?',
				choice1:'It has chemicals', choice2:'It is hard to reuse', choice3:'It is a hazard to recycling facilities', choice4:'All of the above',
				answer:'It is a hazard to recycling facilities',
			},{
				question: 'What are the benifits of recycling?',
				choice1:'Create new jobs', choice2:'Helps the environment', choice3:'Preserve valuable resources', choice4:'All of the above',
				answer:'All of the above',
			},{
				question: 'What is the process of reusing material?',
				choice1:'Throwing it in the trash can', choice2:'Recycling it', choice3:'Buy more food', choice4:'Eat leftovers',
				answer:'Recycling it',
			},{
				//beach question
				question: 'Single-use plastics such as plastic straws, plastic beverage bottles, and food wrappers are the most commonly found items in coastal cleanups worldwide.',
				choice1:'True', choice2:'False',
				answer:'True',
			},{
				question: 'How many garbage patches are there?',
				choice1:'4', choice2:'0', choice3:'5', choice4:'1',
				answer:'5',
			},{
				question: 'Degrading plastics causes chemicals to contaminate the ocean. How many years does it take for a plastic water bottle to fully decompose?',
				choice1:'4', choice2:'400', choice3:'500', choice4:'1,000',
				answer:'400',
			},{
				question: 'What is one of the leading sources of pollution in the ocean caused by rainfall?',
				choice1:'Precipitation', choice2:'Point Source', choice3:'Condensation', choice4:'Runoff',
				answer:'Runoff',
			},{
				question: 'Seabirds and marine animals die more from predators rather than ocean pollution, plastic entanglement and ingestion combined.',
				choice1:'True', choice2:'False', 
				answer:'False',
			},{
				question: '________ pollution is a less common type of pollution but still greatly impacts the ocean. This type of pollution comes from a single source such as an oil truck spill or a chemical spill from a factory.',
				choice1:'Point source', choice2:'Oil spill', choice3:'Single source', choice4:'Indirect',
				answer:'Point source',
			},{
				question: 'Which of the following countries are responsible for a third of all plastic pollution?',
				choice1:'China and USA', choice2:'China and Indonesia', choice3:'UK and Australia', choice4:'Canada and USA',
				answer:'China and Indonesia',
			},{
				question: 'What percentage of ocean pollution will we never see nor clean because of the debris sinking to the bottom of the ocean?',
				choice1:'10%', choice2:'30%', choice3:'70%', choice4:'90%',
				answer:'70%',
			},{
				question: 'About how much of all plastic ever produced remains in the environment today?',
				choice1:'1/4', choice2:'1/2', choice3:'2/3', choice4:'3/4',
				answer:'2/3',
			},{
				question: 'What ocean is the biggest garbage patch located?',
				choice1:'Atlantic', choice2:'Pacific', choice3:'Indian', choice4:'Arctic',
				answer:'Pacific',
			}
		];

		let currentIndex, shuffled;
		let score = 0;

		function showQuestion(){
			let q = questions[currentIndex];
			question_input.text = q.question;
			choice_1.text = q.choice1;
			choice_2.text = q.choice2;
			choice_3.text = q.choice3;
			choice_4.text = q.choice4;
			if(q.choice3 == undefined){
				choicebox_3.visible = false;
				choicebox_4.visible = false;
			}else{
				choicebox_3.visible = true;
				choicebox_4.visible = true;
			}
		}
        
		function hover(){
			choicebox_1.on("pointerover", () => {
				   choicebox_1.alpha = 2;
				   }).on("pointerout", () => {
					   choicebox_1.alpha = 0.5;
					   });
			choicebox_2.on("pointerover", () => {
				   choicebox_2.alpha = 2;
				   }).on("pointerout", () => {
					   choicebox_2.alpha = 0.5;
					   });
			choicebox_3.on("pointerover", () => {
				   choicebox_3.alpha = 2;
				   }).on("pointerout", () => {
					   choicebox_3.alpha = 0.5;
					   });
			choicebox_4.on("pointerover", () => {
				   choicebox_4.alpha = 2;
				   }).on("pointerout", () => {
					   choicebox_4.alpha = 0.5;
					   });
		}

		function nextQuestion(){
			showQuestion(shuffled[currentIndex++]);
			 clearChoice();
			 enabledButton();
			 console.log(score);
		}

		function startQuiz(){
			shuffled = questions.sort(()=>Math.random()-.5);
			currentIndex = 0;
			hover();
			showQuestion();
			checkAnswer();
		}
		 //check answer
		 function checkAnswer(){
			 choicebox_1.on("pointerdown", () =>{
					 if(choice_1.text == questions[currentIndex].answer){
				 //answer is correct
				 score++
				 disableButton();
				 buttonRight.play();
				 choicebox_1.setTint(0x00ff00);
			 }else{
				 disableButton();
				 buttonWrong.play();
				 choicebox_1.setTint(0xff0000);
			 } 
			 });
			 choicebox_2.on("pointerdown", () =>{
					 if(choice_2.text == questions[currentIndex].answer){
				 score++
				 disableButton();
				 buttonRight.play();
				 choicebox_2.setTint(0x00ff00);
			 }else{
				 disableButton();
				 buttonWrong.play();
				 choicebox_2.setTint(0xff0000);
			 } 
			 });
			 choicebox_3.on("pointerdown", () =>{
					 if(choice_3.text == questions[currentIndex].answer){
				 score++
				 disableButton();
				 buttonRight.play();
				 choicebox_3.setTint(0x00ff00);
			 }else{
				 disableButton();
				 buttonWrong.play();
				 choicebox_3.setTint(0xff0000);
			 } 
			 });
			 choicebox_4.on("pointerdown", () =>{
					 if(choice_4.text == questions[currentIndex].answer){
				 score++
				 disableButton();
				 buttonRight.play();
				 choicebox_4.setTint(0x00ff00);
			 }else{
				 disableButton();
				 buttonWrong.play();
				 choicebox_4.setTint(0xff0000);
			 } 
			 });
			 
		 }
         //Next question or print score
		 function disableButton(){
			 choicebox_1.input.enabled = false;
			 choicebox_2.input.enabled = false;
			 choicebox_3.input.enabled = false;
			 choicebox_4.input.enabled = false;
			 if(currentIndex == 9){
				totalScore();
			}else{
				setTimeout(nextQuestion, 2000);
			}
		 }

		 function enabledButton(){
			 choicebox_1.input.enabled = true;
			 choicebox_2.input.enabled = true;
			 choicebox_3.input.enabled = true;
			 choicebox_4.input.enabled = true;
		 }

		 function clearChoice(){
			 choicebox_1.clearTint();
			 choicebox_2.clearTint();
			 choicebox_3.clearTint();
			 choicebox_4.clearTint();
		 }

		 function totalScore(){
			 m_container.visible = false;
			 start_quiz.visible = true;
			 button_start.visible = false;
			 ++currentIndex;
			 score_print.visible = true;
			 quiz_message.visible = false;
			 score_print.text = "You got " +score+ " out of " +currentIndex; 
		 }


		//background music
		var backgroundMusic = this.sound.add("main-menu");
		backgroundMusic.play();
		backgroundMusic.loop = true;


		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
