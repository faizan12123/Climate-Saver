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
		quiz_background.setInteractive();
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
		button_facts.on("pointerdown", () => {
			fact_box.visible= true;
			 choicebox_1.input.enabled = false;
			 choicebox_2.input.enabled = false;
			 choicebox_3.input.enabled = false;
			 choicebox_4.input.enabled = false;
			close_f();
		}).on("pointerover", () => {
      		button_map.scale += 0.12;
    	}).on("pointerout", () => {
			button_map.scaleX = 0.35;
			button_map.scaleY = 0.35;
		});

		//close_f
		function close_f(){
		fact_popup.setInteractive();
		fact_popup.on("pointerdown", () => { fact_box.visible= false; enabledButton();})
		};

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
		choice_4.setOrigin(0.5); choice_4.setX(182); choice_4.setY(387);
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
		choice_3.setOrigin(0.5); choice_3.setX(184); choice_3.setY(314);
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
		choice_2.setOrigin(0.5); choice_2.setX(188); choice_2.setY(239);
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
		choice_1.setStyle({ "align": "center", "baselineY":1.2,"color": "#000000ff", "fontFamily": "Poppins", "fontSize": "20px" });
		choice_1.setOrigin(0.5); choice_1.setX(190); choice_1.setY(165);
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
		start_quiz.visible = false;

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
			button_facts.setInteractive();
		}).on("pointerover", () => {
      		button_start.scale += 0.12;
    	}).on("pointerout", () => {
			button_start.scaleX = 0.35;
			button_start.scaleY = 0.35;
		});

		// button_map
		const button_map = this.add.image(400, 417, "button-map");
		button_map.scaleX = 0.35;
		button_map.scaleY = 0.35;
		button_map.visible = false;
		start_quiz.add(button_map);
		button_map.setInteractive();
		button_map.on("pointerdown", () => {
			backgroundMusic.stop();
			this.scene.start("Start");
		}).on("pointerover", () => {
      		button_map.scale += 0.12;
    	}).on("pointerout", () => {
			button_map.scaleX = 0.35;
			button_map.scaleY = 0.35;
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
		let questions = [];
		let cityQ =[
				{
				//city question
				question: 'What is the process of reusing material?',
				choice1:'Reduce', choice2:'Reuse', choice3:'Recycle', choice4:'All of the above',
				answer:'All of the above',
				fact: 'Recycling is the process of reusing materials that would otherwise be thrown out as trash and transforming them into new products.',
			}, {
				question: 'How much pound each day can an average person generate?',
				choice1:'1', choice2:'2', choice3:'4', choice4:'5',
				answer:'4',
				fact: 'An average person generates over 4 pounds of trash each day and 1.5 tons of solid waste a year.',
			}, {
				question: 'In United States, about 75% of waste stream can be recycled. How much is actually recycled?',
            	choice1:'90%', choice2:'10%', choice3:'60%', choice4:'30%',
				answer:'30%',
				fact: 'According to the EPA, approximately 75% of the waste stream in the United States can be recycled, but we recycle only 30% of it.',
			},{
				question: 'How much energy can a ton of recycled office paper save, equivalent to gasoline gallons.',
                choice1:'122 gallons', choice2: '222 gallons', choice3: '322 gallons', choice4: '422 gallons',
				answer: '322 gallons',
				fact: 'A ton of recycled office paper can save the energy equivalent of 322 gallons of gasoline.',
			},{
				question: 'City uses too much energy and contribute to climate change.',
				choice1: 'True', choice2: 'False', answer: 'True',
				fact: 'One of the major contributors of climate change are cities because cities use 78% of the world\'s energy and create about 60% of greenhouse gas emissions, while only using 2% of Earth\'s surface.',
			},{
				question: 'How much plastic was recycled out of 35 million tons of plastic in 2018?',
                choice1:'25.2%',  choice2:'8.7%', choice3: '60.4%', choice4: '5.5%', answer:'8.7%',
				fact:'In 2018, the United States generated more than 35 million tons of plastic, but only 8.7 percent of it was recycled.',
			},{
				question: 'What type of product can\'t be recycled?',
				choice1:'Food', choice2:'Cardboard', choice3:'Plastic', choice4:'Glass',
				answer:'Food',
				fact: 'Food cannot be recycled. Food that ends up in landfills leads to methane emissions that contribute to climate change.',
			},{
				question: 'Why shouldn\'t broken glass be recycled?',
				choice1:'It has chemicals', choice2:'It is hard to reuse', choice3:'It is a hazard to recycling facilities', choice4:'All of the above',
				answer:'It is a hazard to recycling facilities',
				fact: 'Broken glass should not be recycled. Glass shards can cause injury or damage to workers and equipment.',
			},{
				question: 'What are the benefits of recycling?',
				choice1:'Create new jobs', choice2:'Helps the environment', choice3:'Preserve valuable resources', choice4:'All of the above',
				answer:'All of the above',
				fact:'Recycling can create new jobs, help the environment, and benefit our economy by preserving valuable resources.',
			},{
				question: 'What can you do to reduce food waste?',
				choice1:'Throwing it in the trash can', choice2:'Recycling it', choice3:'Buy more food', choice4:'Eat leftovers',
				answer:'Recycling it',
				fact: 'Composting is an environmentally-friendly means of disposing of food waste. According to the EPA, you can reduce food waste by only purchasing what you need and eating leftovers.',
			}];
			let beachQ =[
				{
				//beach question
				question: 'Single-use plastics such as plastic straws, plastic beverage bottles, and food wrappers are the most commonly found items in coastal cleanups worldwide.',
				choice1:'True', choice2:'False',
				answer:'True',
				fact: 'Single-use plastics are the most common items found in coastal cleanups around the world. These include plastic cigarette butts, food wrappers, beverage bottles, bottle caps, straws, and drink stirrers.',
			},{
				question: 'How many garbage patches are there?',
				choice1:'4', choice2:'0', choice3:'5', choice4:'1',
				answer:'5',
				fact: 'There are five of these garbage patches around the world. Garbage patches are formed when trash is caught in rotating ocean currents.',
			},{
				question: 'Degrading plastics causes chemicals to contaminate the ocean. How many years does it take for a plastic water bottle to fully decompose?',
				choice1:'4', choice2:'400', choice3:'500', choice4:'1,000',
				answer:'400',
				fact: 'Plastic water bottles can take around 400 years to decompose. When the plastic degrades, chemicals are released that further contaminate the ocean.',

			},{
				question: 'What is one of the leading sources of pollution in the ocean caused by rainfall?',
				choice1:'Precipitation', choice2:'Point Source', choice3:'Condensation', choice4:'Runoff',
				answer:'Runoff',
				fact: 'Runoff is one of the leading sources of pollution in the ocean. It is commonly caused by rainfall,which carries away natural and human-made pollutants into our water sources.',
			},{
				question: 'Seabirds and marine animals die more from predators rather than ocean pollution, plastic entanglement and ingestion combined.',
				choice1:'True', choice2:'False', 
				answer:'False',
				fact:'Ocean pollution kills more than one million seabirds each year. More than 100,000 marine animals die every year as a result of plastic entanglement and ingestion.',
			},{
				question: '________ pollution is a less common type of pollution but still greatly impacts the ocean. This type of pollution comes from a single source such as an oil truck spill or a chemical spill from a factory.',
				choice1:'Point source', choice2:'Oil spill', choice3:'Single source', choice4:'Indirect',
				answer:'Point source',
				fact:'The type of pollution that comes from a single source, such as an oil spill or a chemical spill, is called point source pollution. They are less common, but have a huge impact.',
			},{
				question: 'Which of the following countries are responsible for a third of all plastic pollution?',
				choice1:'China and USA', choice2:'China and Indonesia', choice3:'UK and Australia', choice4:'Canada and USA',
				answer:'China and Indonesia',
				fact: 'China and Indonesia produce more plastic in the ocean than any other country, together they are responsible for a third of all plastic pollution. Over 80 percent of plastic pollution comes from only 20 countries, including the United States.',
			},{
				question: 'What percentage of ocean pollution will we never see nor clean because of the debris sinking to the bottom of the ocean?',
				choice1:'10%', choice2:'30%', choice3:'70%', choice4:'90%',
				answer:'70%',
				fact:'The worst part of ocean pollution might be what we can\'t see: 70 percent of ocean debris sinks to the seafloor, meaning we probably won\'t ever be able to clean it up.',
			},{
				question: 'About how much of all plastic ever produced remains in the environment today?',
				choice1:'1/4', choice2:'1/2', choice3:'2/3', choice4:'3/4',
				answer:'2/3',
				fact:'Plastic is a problem throughout its entire lifecycle - from its extraction to its eventual disposal. Roughly two-thirds of all plastic ever produced remains in the environment today-either as ocean pollution or as fragments in other environments.',
			},{
				question: 'What ocean is the biggest garbage patch located?',
				choice1:'Atlantic', choice2:'Pacific', choice3:'Indian', choice4:'Arctic',
				answer:'Pacific',
				fact: 'The Great Pacific Garbage Patch is the largest of them all, covering an area twice as large as Texas. The size and shape of the garbage patches constantly change due to winds and currents.',
			}];
			let forestQ =[
				{
				//forest question
				question:'Deforestation is the destruction of forest lands for the purpose of converting them into other uses which are usually regarded as less profitable.',
				choice1: 'True', choice2: 'False',
				answer:'False', 
				fact:'Deforestation is the permanent removal of trees away from forests to make way for another use such as agriculture, livestock, building, or manufacturing.',
			},{
				question:'Forests produce three-quarters of freshwater.',
				choice1: 'True', choice2: 'False', 
				answer:'True', 
				fact:'The 2020 United Nations State of the World\'s Forests report found that approximately a third of Earth\'s freshwater comes from forests, and the loss of trees can affect water quality.',
			},{
				question:'How much of Earth\'s surface is covered by forests?',
				choice1: '70%', choice2: '45%', choice3: '30%', choice4: '90%',
				answer:'30%', 
				fact:'According to the World Wildlife Fund, more than 30% of Earth\'s land surface is covered by forests, which produce oxygen and absorb carbon dioxide.',
			},{
				question:'Why are trees important against climate change?',
				choice1: 'Slow down air polution', choice2: 'Provides shade and wood', choice3: 'Pproduce oxygen', choice4: 'Decrease greenhouse emissions',
				answer:'Decrease greenhouse emissions', 
				fact:'Trees can absorb carbon dioxide, decreasing the amount of greenhouse gas emissions from human activity. As climate change continues, trees play an important role in capturing and storing excess carbon dioxide.',
			},{
				question:'All of the materials responsible for the majority of tropical deforestation beside?',
				choice1: 'Beef', choice2: 'Fruit', choice3: 'Wood', choice4: 'Palm oil',
				answer:'Fruit', 
				fact:'The Union Concerned Scientists (UCS) reports that beef, soy, palm oil, and wood products are the four commodities that are most responsible for tropical deforestation.',
			},{
				question:'Palm oil is a sought after resource contributing to deforestation.',
				choice1: 'True', choice2: 'False',
				answer:'False', 
				fact:'Palm oil is one of the most commonly produced vegetable oils, found in half of all supermarket products. Many forests are cleared to plant palm oil plantations.',
			},{
				question:'How does deforestation affect water conditions in the tropical region?',
				choice1: 'Reduce sunlight', choice2: 'Reduce rainfall', choice3: 'Reduce snowfall', choice4: 'Harsh winds',
				answer:'Reduce rainfall', 
				fact:'Deforestation in tropical regions can also affect the formation of water vapor over the canopy, which can reduce rainfall.',
			},{
				question:'How does deforestation occur intentionally?',
				choice1: 'Wildfires', choice2: 'Human activities', choice3: 'Logging', choice4: 'Fuel suppling',
				answer:'Wildfires', 
				fact:'It is not always intentional to deforest. In some cases, wildfires and overgrazing may result in deforestation because they prevent new trees from growing.',
			},{
				question:'Deforestation is one of the contributers to global warming?',
				choice1: 'True', choice2: 'False', 
				answer:'True', 
				fact:'About 10% of global warming is attributed to forest loss and damage.',
			},{
				question:'How many trees are cut down each year around the world?',
				choice1: '20 million', choice2: '15 billion', choice3: '2 trillion', choice4: '12 million',
				answer:'15 billion', 
				fact:'Deforestation costs between $2 trillion and $4.5 trillion each year through the loss of biodiversity.',
			}]
			let iceyQ =[
				{
				//icey question
				question:'What is the frozen part of the Earth system called?',
				choice1: 'Hemisphere', choice2: 'Cryosphere', choice3: 'Atmosphere', choice4: 'Icesphere',
				answer:'Cryosphere',
				 fact:'The cryosphere, known as the parts with ice on our planet, is intertwined with the other parts of the Earth system that what happens there affects the entire planet.', 
			},{
				question:'What places contain most of Earth\'s ice?',
				choice1: 'Greenland and Antarctic', choice2: 'The Arctic and Iceland', choice3: 'Greenland and Iceland', choice4: 'The Arctic and Antarctic',
				answer:'The Arctic and Antarctic', 
				fact: 'Climate change continues to rise, the more ice will melt. The Arctic and Antarctic contain most of Earth\'s ice, therefore the entire planet is affected by this issue.',
			},{
				question:'Why does solar energy reflect back more from snow and ice?',
				choice1: 'Their light color', choice2: 'Coldness', choice3: 'Solid Phase', choice4: 'Fix volume',
				answer:'Their light color', 
				fact: 'Snow and ice reflect about 90% of the solar radiation they receive back to space. With melting ice, more land is exposed so the radiation is not reflected but absorbed by land causing more global warming.',
			},{
				question:'What short-lived pollutant affects the rate of snow and ice melting and reflectivity?',
				choice1: 'Hydrogen', choice2: 'Nitrogen', choice3: 'Carbon Dioxide', choice4: 'Black Carbon',
				answer:'Black Carbon',
				fact: 'Soot, known as black carbon is the 2nd leading cause of global warming, while. Black carbon pollution covers the ice and increases the rate of snow and ice melting because of its color that reduces reflectivity.',
			},{
				question:'Black carbon is not preventable and can stay in the atmosphere months to years.',
				choice1: 'True', choice2: 'False', 
				answer:'False',
				fact: 'Carbon dioxide stays in the atmosphere for a longer time than black carbon and is not preventable. Black carbon is a “short-lived” pollutant that causes warming for a few days to months.', 
			},{
				question:'Less snow is beneficial to the wildlife and communities in the Arctic.',
				choice1: 'True', choice2: 'False', 
				answer:'False', 
				fact: 'Less snow covering the Arctic, Antarctic, and the ground in general decrease the benefits of snow as an insulator for vegetation and wildlife, supplying water, transportation, travel, etc.',
			},{
				question:'What gasses are released after the soil is thawed in icey environments?',
				choice1: 'Carbon dioxide and Methane', choice2: 'Ethane and Methane', choice3: 'Nitrogen and Carbon dioxide', choice4: 'Chlorine and Carbonmonoxide',
				answer:'Carbon dioxide and Methane', 
				fact: 'Global warming thaws frozen soil that has been there for 40,000 years. These frozen soils contain greenhouse gasses, carbon dioxide and methane. The gasses will be released into the atmosphere which will cause more warming to occur.',
			},{
				question:'Sea ice affects the movement of ocean waters.',
				choice1: 'True', choice2: 'False', 
				answer:'True', 
				fact: 'The movement of ocean waters is affected by sea ice. The water below sea ice is more dense and has a higher concentration of salt. Normal ocean circulation may be disrupted if the amount of sea ice changes, this also leads to changes in global climates.',
			},{
				question:'About what percentage does snow and ice reflect solar energy?',
				choice1: '100%', choice2: '50%', choice3: '90%', choice4: '10%',
				answer:'90%', 
				fact: 'The light color of snow and ice reflect about 90% of the sunlight. reduction in snow cover and ice causes the Earth\'s surface to absorb more energy from the sun and become warmer.',
			},{
				question:'At what rate does the sea level increase per year?',
				choice1: '100 centimeters', choice2: '1-2 meters', choice3: '1-2 millimeters', choice4: '1 kilometers',
				answer:'1-2 millimeters', 
				fact: 'Each year, the sea level has increased about 1-2 millimeters because of global warming melting glaciers and ice sheets at a faster rate.',
			}
			];

		let currentIndex, shuffled;
		let score = 0;

		function showQuestion(){
			//shuffled = questions.sort(()=>Math.random()-.5);
			let q = questions[currentIndex];
			question_input.text = q.question;
			choice_1.text = q.choice1;
			choice_2.text = q.choice2;
			choice_3.text = q.choice3;
			choice_4.text = q.choice4;
			f_text.text = q.fact;
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
			showQuestion(currentIndex++);
			check_mark.visible = false;
			x_mark.visible = false;
			 clearChoice();
			 enabledButton();
			 console.log(score);
		}

		function startQuiz(){
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
				 check_mark.visible = true;
				 disableButton();
				 buttonRight.play();
				 choicebox_1.setTint(0x00ff00);
			 }else{
				 x_mark.visible = true;
				 disableButton();
				 buttonWrong.play();
				 choicebox_1.setTint(0xff0000);
			 } 
			 });
			 choicebox_2.on("pointerdown", () =>{
					 if(choice_2.text == questions[currentIndex].answer){
				 score++
				 check_mark.visible = true;
				 disableButton();
				 buttonRight.play();
				 choicebox_2.setTint(0x00ff00);
			 }else{
				 x_mark.visible = true;
				 disableButton();
				 buttonWrong.play();
				 choicebox_2.setTint(0xff0000);
			 } 
			 });
			 choicebox_3.on("pointerdown", () =>{
					 if(choice_3.text == questions[currentIndex].answer){
				 score++
				 check_mark.visible = true;
				 disableButton();
				 buttonRight.play();
				 choicebox_3.setTint(0x00ff00);
			 }else{
				 x_mark.visible = true;
				 disableButton();
				 buttonWrong.play();
				 choicebox_3.setTint(0xff0000);
			 } 
			 });
			 choicebox_4.on("pointerdown", () =>{
					 if(choice_4.text == questions[currentIndex].answer){
				 score++
				 check_mark.visible = true;
				 disableButton();
				 buttonRight.play();
				 choicebox_4.setTint(0x00ff00);
			 }else{
				 x_mark.visible = true;
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
				check_mark.visible = false;
				x_mark.visible = false;
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
			 button_map.visible = true;
			 score_print.text = "You got " +score+ " out of " +currentIndex; 
		}

		// fact_box
		const fact_box = this.add.layer();
		fact_box.visible = false;

		// fact_popup
		const fact_popup = this.add.image(438, 295, "fact-popup");
		fact_popup.scaleX = 0.52;
		fact_popup.scaleY = 0.48;
		fact_box.add(fact_popup);

		// f_text
		const f_text = this.add.text(109, 177, "", {});
		f_text.text = "Appear here\n";
		f_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Poppins", "fontSize": "27px" });
		f_text.setWordWrapWidth(580);
		f_text.setOrigin(0.5); f_text.setX(420); f_text.setY(270);
		fact_box.add(f_text);

		// close-fact
		const close_fact = this.add.text(251, 399, "", {});
		close_fact.text = "Click anywhere to exit\n";
		close_fact.setStyle({ "color": "#000000ff", "fontSize": "25px" });
		fact_box.add(close_fact);
		
		// x_mark
		const x_mark = this.add.image(448, 167, "x-mark");
		x_mark.scaleX = 0.6;
		x_mark.scaleY = 0.6;
		x_mark.visible = false;

		// check_mark
		const check_mark = this.add.image(450, 167, "check-mark");
		check_mark.scaleX = 0.6;
		check_mark.scaleY = 0.6;
		check_mark.visible = false;
		
		// pick
		const pick = this.add.container(321, 361);

		// quiz_box_1
		const quiz_box_1 = this.add.image(156, -91, "quiz-box");
		quiz_box_1.scaleX = 0.4;
		quiz_box_1.scaleY = 0.3;
		pick.add(quiz_box_1);

		// select4
		const select4 = this.add.image(201, 53, "button-radio");
		select4.scaleX = 1.28;
		select4.scaleY = 1.09;
		select4.setInteractive();
		pick.add(select4);
		select4.on("pointerdown", () =>{
			questions = forestQ;
			pick.visible= false;
			start_quiz.visible= true;
		});

		// select3
		const select3 = this.add.image(-12, 53, "button-radio");
		select3.scaleX = 1.28;
		select3.scaleY = 1.09;
		select3.setInteractive(); 
		pick.add(select3);
		select3.on("pointerdown", () =>{
			questions = iceyQ;
			pick.visible= false;
			start_quiz.visible= true;
		});

		// select2
		const select2 = this.add.image(201, -62, "button-radio");
		select2.scaleX = 1.28;
		select2.scaleY = 1.09;
		select2.setInteractive();
		pick.add(select2);
		select2.on("pointerdown", () =>{
			questions = beachQ;
			pick.visible= false;
			start_quiz.visible= true;
		});

		// select1
		const select1 = this.add.image(-12, -62, "button-radio");
		select1.scaleX = 1.28;
		select1.scaleY = 1.09;
		select1.setInteractive();
		pick.add(select1);
		select1.on("pointerdown", () =>{
			questions = cityQ;
			pick.visible= false;
			start_quiz.visible= true;
		});

		// forestT
		const forestT = this.add.text(258, 35, "", {});
		forestT.text = "Forest\n";
		forestT.setStyle({ "color": "#000000ff", "fontFamily": "Poppins", "fontSize": "30px" });
		pick.add(forestT);

		// iceyT
		const iceyT = this.add.text(37, 34, "", {});
		iceyT.text = "Icey\n";
		iceyT.setStyle({ "color": "#000000ff", "fontFamily": "Poppins", "fontSize": "30px" });
		pick.add(iceyT);

		// beachT
		const beachT = this.add.text(258, -81, "", {});
		beachT.text = "Beach\n";
		beachT.setStyle({ "color": "#000000ff", "fontFamily": "Poppins", "fontSize": "30px" });
		pick.add(beachT);

		// cityT
		const cityT = this.add.text(39, -82, "", {});
		cityT.text = "City";
		cityT.setStyle({ "color": "#000000ff", "fontFamily": "Poppins", "fontSize": "30px" });
		pick.add(cityT);

		// pickT
		const pickT = this.add.text(-50, -211, "", {});
		pickT.text = "Choose an Environment\n       to begin quiz\n";
		pickT.setStyle({ "color": "#000000ff", "fontFamily": "Poppins", "fontSize": "35px" });
		pick.add(pickT);

		//background music
		var backgroundMusic = this.sound.add("quiz-bg", {volume: 0.2});
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
