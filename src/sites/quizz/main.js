// Get references to the button and dropdown options
var button = document.getElementById('dropdown-button');
var options = document.getElementById('dropdown-options');
var dropdown = document.getElementById('my-select');

// Function to show the dropdown options
function showDropdownOptions() {
    options.style.display = 'grid';
}

// Function to hide the dropdown options
function hideDropdownOptions() {
    options.style.display = 'none';
}

// Toggle the visibility of the dropdown options when the button is clicked
dropdown.addEventListener('click', function () {
    if (options.style.display === 'none' || options.style.display === '') {
        showDropdownOptions();
    } else {
        hideDropdownOptions();
    }
});

// Handle option selection and update the button text
options.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'LI') {
        // Create an <img> element for the icon
        var iconImg = document.createElement('img');
        iconImg.className = 'icon';
        iconImg.src = './src/Img/icon.svg';
        iconImg.alt = 'drop';

        // Update the button text and append the icon
        button.textContent = e.target.textContent;
        button.appendChild(iconImg);

        hideDropdownOptions();
    }
});

// Hide dropdown options when clicking outside the dropdown
document.addEventListener('click', function (e) {
    if (e.target != dropdown && e.target != button) {
        hideDropdownOptions();
    }
});


var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    updateOnWindowResize: true,
    initialSlide: 0,
    clickable: true, // Disable slideToClickedSlide
    noSwiping: true, // Disable swiping
    noSwipingClass: 'swiper-slide',
    speed: 0, // Set the speed to 0 for an instant transition

});



// Add click event listener to elements with class 'cont' (Next button)
var contButtons = document.querySelectorAll('.cont');
contButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the button from submitting forms (if any)
        swiper.slideNext(); // Move to the next slide
    });
});

// Add click event listener to elements with class 'back' (Back button)
var backButtons = document.querySelectorAll('.back');
backButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the button from submitting forms (if any)
        swiper.slidePrev(); // Move to the previous slide
    });
});


// Get references to the textarea and the varname element
var textarea = document.getElementById('nameInput');
var varnameElement = document.querySelector('.varname p');

// Add an event listener to the textarea to update the varname element
textarea.addEventListener('input', function () {
    varnameElement.textContent = textarea.value;
});

///
const parentsAndVarname = document.querySelectorAll('.parent, .varname'); // Select all elements with class 'parent' or 'varname'
let z = 1;

parentsAndVarname.forEach((element) => {
  element.addEventListener('mousedown', (event) => {
    z++;
    element.style.zIndex = z;

    let startX = event.clientX;
    let startY = event.clientY;

    let startLeft = parseFloat(getComputedStyle(element).left);
    let startTop = parseFloat(getComputedStyle(element).top);

    const onMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      element.style.left = startLeft + deltaX + 'px';
      element.style.top = startTop + deltaY + 'px';

      // Check for overlap with other elements
      parentsAndVarname.forEach((otherElement) => {
        if (otherElement !== element) {
          const rect1 = element.getBoundingClientRect();
          const rect2 = otherElement.getBoundingClientRect();

          const overlapX = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
          const overlapY = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));

          if (overlapX > 0 && overlapY > 0) {
            // There is an overlap, change the background color
            element.style.filter = 'contrast(1) saturate(1.1) brightness(1.1) drop-shadow(5px 5px 15px white)'; // Adjust the drop-shadow parameters and color as needed
            otherElement.style.filter = 'contrast(1) saturate(1.1) brightness(1.1) drop-shadow(5px 5px 15px white)';
            element.style.boxShadow = '0 0 10px white'; // Adjust shadow properties as needed
            otherElement.style.boxShadow = '0 0 10px white';
          } else {
            // No overlap, revert to original background color
            element.style.filter = ''; // Remove inline style to use CSS rules
            otherElement.style.filter = ''; // Remove inline style to use CSS rules
            element.style.boxShadow = ''; // Remove inline style to use CSS rules
            otherElement.style.boxShadow = '';
          }
        }
      });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});

////////

const topics = {
    "A": ["Leave a note of encouragement on the bathroom mirror for them to see each morning. 1A",
    "Text an inspiring quote about the importance of parenting/family when stressed. 1A",
    "Send an audio message thanking them for all the lessons and support you've received. 1A",
    "Write a letter listing what you admire about their strength as a role model. 1A",
    "Leave a cooked meal with a note about how they fill your belly and heart each day. 1A",

    "What's your favorite way to spend a weekend? 4A", 
    "What's your most used emoji or your emoji personality? 4A",
    "What's the last thing that made you truly laugh out loud? 4A",
    "What's your favorite holiday tradition or memory? 4A",
    "What smells or flavors remind you of home? 4A",

    "What self-care activities helped you recharge from busy seasons? 2A",
    "What makes you feel most fulfilled outside just a career/What do you find fulfilling? 2A",
    "How do you think companies could better support employees' well-being? 2A",
    "In what ways might generational views on work-life balance differ or align? 2A",
    "What signs can help recognize when work is encroaching on personal wellness? 2A",
    "How important is community and social support for recharging outside of work? 2A",
    "What role does flexibility or autonomy play in feeling in control of one's schedule? 2A",
    "What daily or weekly routines help quiet the mind and promote mental calm? 2A",
    "How can setting boundaries help prevent resentment or burnout long term? 2A",
    "What type of self-reflection helps maintain passion and resilience? 2A",
],
   
    "B": ["Write a letter to a family member expressing a disagreeing perspective, held back feelings, or apology without sending. Fold into a keepsake heart. 1B",
        "Draw a internal conflict tree listing family roles, behaviors, emotional responses on leaves/branches to visualize dynamics needing cultivation. 1B",
        "Complete the prompt 'I wish my family understood...' on a notecard and share preferences for being heard without demands. Listen without rebuttal. 1B",
        "Recall a time growing apart was alleviated through honest discussion. Discuss how recreating such talks could help current divisions heal. 1B",
        "Compose individual family relationship mental health self-care plans with boundaries, connection needs, triggers to discuss successfully navigating discord as a united front. 1B",

        "How important is open communication despite topic sensitivity for family cohesion? 2B",
        "What role does respect, empathy and validation play in overcoming divides? 2B",
        "When does embracing diversity enhance relationships versus allowing distances? 2B",
        "How can acknowledging multiple perspectives aid compromise over dominance? 2B",
        "What life transitions commonly bring latent issues to the surface within families? 2B",
        "Which family roles most commonly come into question across generations? 2B",
        "How do expectations shift from obedience to independence as children age/marry? 2B",
        "What signs indicate unresolved conflicts negatively impacting overall family bonds? 2B",
        "When might professional counseling help address root causes constructively? 2B",
        "How can families foster continued growth towards more conscious relationships? 2B",

        "What's your favorite kind of book or genre to read? 4B",
        "What's your favorite type of dance and music to dance to? 4B",
        "What's the most daring thing you've ever done? 4B",
        "What's on your bucket list of places to visit? 4B",
        "What's one thing you want to accomplish this year? 4B",
],
    "C": ["Each privately lists 3-5 activities/classes enjoyed, then share and find any overlap. 1C",
        "Take turns interviewing each other about most/least rewarding aspects of current/past roles. 1C",
        "Together browse a few potential career websites and note any jobs sparking interest for both. 1C",
        "Exchange 2-3 desirable lifestyle factors (salary, schedule flexibility etc.) sought in future roles. 1C",
        "Compare top skills and strengths, looking for overlaps applying to jobs under consideration. 1C",

        "How influential are internships, apprenticeships in sampling careers nowadays? 2C",
        "What role does higher education now play compared to previous generations? 2C",
        "How has globalization impacted the types of jobs available locally? 2C",
        "When might further schooling help and when could it hinder career mobility? 2C",
        "What strategies help land interviews and opportunities most effectively currently? 2C",
        "How common/advisable are career switches or job hopping at different stages? 2C",
        "What are some emerging or promising industries on the rise to consider? 2C",
        "How important is cultivating diverse hard and soft skills for long term employability? 2C",
        "What trends or forecasts help inform education/training decisions purposefully? 2C",
        "How do passions, strengths, lifestyle and salary all factor into career satisfaction? 2C",

        "What was your dream job as a child? 4C",
        "If you could live anywhere in the world, where would you choose? 4C",
        "What's one thing you collect or are interested in? 4C",
        "What college did you attend or where would you like to attend? 4C",
        "What's your favorite kind of pet? 4C",
],
    "D": [
    "Take the online love languages quiz individually and compare results to spark discussion. 1D",
    "Share a past meaningful gesture from a partner/family member that made you feel truly loved and understood. 1D",
    "Write a brief list of each other's possible primary languages based on observations. Take turns reading and giving feedback. 1D",
    "Commit to employing a new love language weekly as an experiment. Journal impressions and share how it impacted feelings of care. 1D",
    "Discuss how family members naturally show affection differently and how understanding variances has helped relationships. 1D",
   
    "What challenges present when showing love doesn't equal feeling loved? 2D",
    "How does awareness of preferences create better appreciation for diversity? 2D",
    "What life experiences most strongly shape one's love languages? 2D",
    "How can love languages framework foster healthier communication patterns? 2D",
    "How aware are you of others' preferred languages beyond your own? 2D",
    "When have you struggled expressing affection in a way that would be received? 2D",
    "What role models inspire you in how they show care in their own relationships? 2D",
    "How might fostering gratitude help appreciate what you do receive sufficiently? 2D",
    "How could our talks help increase understanding to strengthen our bond? 2D",
    "What growth have you experienced learning about this concept of love languages? 2D",

    "What did you want to be when you grew up? 4D",
    "What's your favorite outfit that you own? 4D",
    "What's the luckiest thing that's ever happened to you? 4D",
    "What's an interesting fact few people know about you? 4D",
    "What's one of your hidden talents? 4D",
],
    "F": [
        "Describe your perspective on a recently debated issue/current situation others may disagree with. 1F",
        "Explain what factors like your experiences, values or information sources led to forming this view. 1F",
        "Consider an alternative viewpoint others involved may have on this issue and potential reasons behind it. 1F",
        "How might discussing the situation with others who see it differently help you better understand all angles involved? 1F",
        "What possible solutions or future actions, if any, could help address differences respectfully and make progress on this topic? 1F",

        "How might open-minded discussion strengthen bonds despite political differences? 2F",
        "What role does empathy, wisdom and factual data each play in social perspective? 2F",
        "How can addressing root causes aid where reactions feed further divide alone? 2F",
        "When are certain topics best tabled versus discussed to avoid toxicity versus apathy? 2F",
        "How does community shape versus individualize responsibility for positive change? 2F",
        "How do environmental, economic and health-related issues impact communities unitedly? 2F",
        "What actions better future society and what current policies still require improvement? 2F",
        "How do respect, compassion and moral courage overcome fear or complacency? 2F",
        "When do discussions inspire and when might silent support or solutions better serve? 2F",
        "How does embracing diversity aid social belonging, justice and progress ultimately? 2F",

        "What's the best concert you've been to? 4F",
        "What's your favorite holiday and how do you celebrate? 4F",
        "What's your favorite thing about your city/town? 4F",
        "What's your favorite ice cream flavor? 4F",
        "What's the last great movie you saw? 4F",
        "What's your favorite kind of cuisine or food? 4F",
],
    "G": [
        "Discuss what drew you to initially question or feel curious about your sexuality. Share any fears, uncertainties or questions without judgment. 1G",
        "Read empowering quotes from LGBTQ+ leaders throughout history and discuss how perspectives have changed over generations. 1G",
        "Share feelings surrounding 'coming out' if desired, whether to yourself, friends or family. Explore how loved ones can best support exploration of identity. 1G",
        "Research reputable organizations providing resources for self-reflection, community or counseling. Commit to contacting one together if desired for guidance. 1G",
        "Using an identity mapping activity, chart feelings surrounding labels, attractions and relationships over time. Note positive and negative influences to build self-awareness. 1G",    

        "How can parents best support youth discovering and coming to terms with identity? 2G",
        "What more do different generations have left to understand about each other? 2G",
        "How can we use our experiences to help remedy ignorance in others? 2G",
        "In what ways can society foster safer and healthier explorations of self? 2G",
        "In what ways has access to information empowered self-awareness and authenticity? 2G",
        "How might social conditions like toxic masculinity hinder self-acceptance? 2G",
        "What role does exposure and familiarity between groups play in normalizing diversity? 2G",
        "How can respect, not just tolerance, become the standard afforded all people? 2G",
        "What can leaders, role models or friends each do to spread inclusion positively? 2G",
        "How do unconditional love and patience help overcome fear or change long-held views? 2G",    

        "What was your favorite childhood TV show or movie? 4G",
        "What's the most embarrassing thing that's happened to you? 4G",
        "What's the last compliment you received? 4G",
        "What superpower would you want to have? 4G",
        "What profession other than your own would you like to try? 4G",    

    ],
    "E": [
        "Share how you're feeling today using a color or weather without context. Guess the other's with compassion. 1E",
        "Write positive traits/skills you appreciate in each other on slips of paper. Draw randomly to remember during tough times. 1E",
        "Discuss which lines from mental health mantras/poems resonate most in times of struggle. 1E",
        "Talk through a situation that triggered distress. Then flip it to a positive coping thought to carry forward. 1E",
        "Discuss stigma reduction by normalizing mental wellness care similar to physical health maintenance. 1E",

        "What advice would you both give for maintaining motivation through challenges? 2E",
        "How do your generations differ in talking about feelings and personal struggles? 2E",
        "What could help us feel comfortable discussing mental wellness openly? 2E",
        "How has societal understanding and awareness of these issues changed overtime? 2E",
        "What role does a supportive community or strong relationships play in well-being? 2E",
        "What impact can unrealistic standards from social media have on one's self-esteem? 2E",
        "How are concepts of masculinity or femininity broadening in approach to mental health? 2E",
        "What is the difference between normal mood fluctuations and warning signs needing attention? 2E",
        "How do lifestyle factors like work, social life, exercise influence mental stability? 2E",
        "How can setting emotional boundaries protect well-being in career or relationships? 2E",

        "What's the best toy you remember from childhood? 4E",
        "What is your favorite childhood memory? 4E",
        "What are you most proud of? 4E",
        "What's your passion or hobby outside of work? 4E",
        "What's the weirdest dream you've ever had? 4E",
    ],
    "H": [
        "Fill out a graphic love language worksheet independently by drawing pictures representing each language for yourself and your ideal partner. Compare side by side. 1H",
        "Create a vision board by cutting out magazine images showing relationship values, meaningful dates/quality time ideas and partnership dreams without words. 1H",
        "Listen to love songs alone and code sections with colored pencils based on emotions/lessons that resonate from experiences. Compare coded sheets. 1H",
        "Complete portrait drawings of former partners including symbols around edges depicting what you learned and features valued/not valued in future relationships. 1H",
        "Sit quietly together in nature and privately journal about one relationship revelation or key takeaway without sharing aloud. Return indoors to decompress in comfort of company without pressuring direct discussion. 1H",

        "How might generational changes influence modern approaches to dating? 2H",
        "What role does social media play in youth relationships both positively and negatively? 2H",
        "How important is understanding another's family background in commitment? 2H",
        "When do relationships require balancing alone time versus shared experiences? 2H",
        "What signs indicate being ready for more serious levels of intimacy or partnership? 2H",
        "How can open communication help navigate differences to compromise supportively? 2H",
        "What life lessons or perspectives do longer partnerships provide to relationships? 2H",
        "How might commitment look different to different people based on beliefs or identity? 2H",
        "When does acknowledging irreconcilable contrasts allow relationships to close positively? 2H",
        "How can surrounding communities foster healthier relationship role models overall? 2H",

        "What's one thing you want to accomplish this year? 4H",
        "What's your middle name? 4H",
        "What's your favorite sport to watch or play? 4H",
        "What's your favorite thing about your job or field of study? 4H",
        "What's your ideal super lazy day look like? 4H",
        "What's the best piece of advice you've ever received? 4H",
    ],
    "J": [
        "Note personal mottoes or sayings that reflect how you approach different areas of life. 1J",
        "Recall a time when someone surprised you by exceeding or not meeting perceptions of how things might be. 1J",
        "Select an inspiring quote about a related topic and reflect on why it resonates. 1J",
        "Consider discussing with a friend or family member a past experience where comparing views provided a new perspective. 1J",
        "Reflect privately on small daily choices or habits influenced subtly by hopes for outcomes versus realistic views of effort needed. 1J",

        "How can understanding better equip all to support versus burden each other's journeys? 2J",
        "When do expectations inspire and when might they deter risks or autonomy necessary? 2J",
        "What signs indicate care for intrinsic drives versus lives projected by external validation? 2J",
        "How can perspective shift from disappointed hopes to pride in each person's self-worth? 2J",
        "When could space for flaws and failure build confidence versus fear and people-pleasing? 2J",
        "How can setting family member's well-being as priority aid accepting life's uncertainties? 2J",
        "What role does empathy, compromise and setting healthy limits each play for balance? 2J",
        "How do conditions of worth impair relationships and when unconditional care liberates? 2J",
        "How can embracing individual paths strengthen bonds beyond roles and superficial goals? 2J",
        "When might counseling provide tools to speak shown but unsaid hopes constructively? 2J",

        "What's your favorite season and why? 4J",
        "What superpower would you want and what would you do with it? 4J",
        "What was your favorite TV show growing up? 4J",
        "What's your favorite type of music? 4J",
        "What's the best concert you've been to? 4J",
    ],
};

const states = {
    "1": ["Leave a note of encouragement on the bathroom mirror for them to see each morning. 1A",
    "Text an inspiring quote about the importance of parenting/family when stressed. 1A",
    "Send an audio message thanking them for all the lessons and support you've received. 1A",
    "Write a letter listing what you admire about their strength as a role model. 1A",
    "Leave a cooked meal with a note about how they fill your belly and heart each day. 1A",

    "Write a letter to a family member expressing a disagreeing perspective, held back feelings, or apology without sending. Fold into a keepsake heart. 1B",
    "Draw a internal conflict tree listing family roles, behaviors, emotional responses on leaves/branches to visualize dynamics needing cultivation. 1B",
    "Complete the prompt 'I wish my family understood...' on a notecard and share preferences for being heard without demands. Listen without rebuttal. 1B",
    "Recall a time growing apart was alleviated through honest discussion. Discuss how recreating such talks could help current divisions heal. 1B",
    "Compose individual family relationship mental health self-care plans with boundaries, connection needs, triggers to discuss successfully navigating discord as a united front. 1B",

    "Each privately lists 3-5 activities/classes enjoyed, then share and find any overlap. 1C",
    "Take turns interviewing each other about most/least rewarding aspects of current/past roles. 1C",
    "Together browse a few potential career websites and note any jobs sparking interest for both. 1C",
    "Exchange 2-3 desirable lifestyle factors (salary, schedule flexibility etc.) sought in future roles. 1C",
    "Compare top skills and strengths, looking for overlaps applying to jobs under consideration. 1C",

    "Take the online love languages quiz individually and compare results to spark discussion. 1D",
    "Share a past meaningful gesture from a partner/family member that made you feel truly loved and understood. 1D",
    "Write a brief list of each other's possible primary languages based on observations. Take turns reading and giving feedback. 1D",
    "Commit to employing a new love language weekly as an experiment. Journal impressions and share how it impacted feelings of care. 1D",
    "Discuss how family members naturally show affection differently and how understanding variances has helped relationships. 1D",

    "Share how you're feeling today using a color or weather without context. Guess the other's with compassion. 1E",
    "Write positive traits/skills you appreciate in each other on slips of paper. Draw randomly to remember during tough times. 1E",
    "Discuss which lines from mental health mantras/poems resonate most in times of struggle. 1E",
    "Talk through a situation that triggered distress. Then flip it to a positive coping thought to carry forward. 1E",
    "Discuss stigma reduction by normalizing mental wellness care similar to physical health maintenance. 1E",

    "Describe your perspective on a recently debated issue/current situation others may disagree with. 1F",
    "Explain what factors like your experiences, values or information sources led to forming this view. 1F",
    "Consider an alternative viewpoint others involved may have on this issue and potential reasons behind it. 1F",
    "How might discussing the situation with others who see it differently help you better understand all angles involved? 1F",
    "What possible solutions or future actions, if any, could help address differences respectfully and make progress on this topic? 1F",

    "Discuss what drew you to initially question or feel curious about your sexuality. Share any fears, uncertainties or questions without judgment. 1G",
    "Read empowering quotes from LGBTQ+ leaders throughout history and discuss how perspectives have changed over generations. 1G",
    "Share feelings surrounding 'coming out' if desired, whether to yourself, friends or family. Explore how loved ones can best support exploration of identity. 1G",
    "Research reputable organizations providing resources for self-reflection, community or counseling. Commit to contacting one together if desired for guidance. 1G",
    "Using an identity mapping activity, chart feelings surrounding labels, attractions and relationships over time. Note positive and negative influences to build self-awareness. 1G",

    "Fill out a graphic love language worksheet independently by drawing pictures representing each language for yourself and your ideal partner. Compare side by side. 1H",
    "Create a vision board by cutting out magazine images showing relationship values, meaningful dates/quality time ideas and partnership dreams without words. 1H",
    "Listen to love songs alone and code sections with colored pencils based on emotions/lessons that resonate from experiences. Compare coded sheets. 1H",
    "Complete portrait drawings of former partners including symbols around edges depicting what you learned and features valued/not valued in future relationships. 1H",
    "Sit quietly together in nature and privately journal about one relationship revelation or key takeaway without sharing aloud. Return indoors to decompress in comfort of company without pressuring direct discussion. 1H",

    "Note personal mottoes or sayings that reflect how you approach different areas of life. 1J",
    "Recall a time when someone surprised you by exceeding or not meeting perceptions of how things might be. 1J",
    "Select an inspiring quote about a related topic and reflect on why it resonates. 1J",
    "Consider discussing with a friend or family member a past experience where comparing views provided a new perspective. 1J",
    "Reflect privately on small daily choices or habits influenced subtly by hopes for outcomes versus realistic views of effort needed. 1J",
],
    "2": ["What self-care activities helped you recharge from busy seasons? 2A",
    "What makes you feel most fulfilled outside just a career/What do you find fulfilling? 2A",
    "How do you think companies could better support employees' well-being? 2A",
    "In what ways might generational views on work-life balance differ or align? 2A",
    "What signs can help recognize when work is encroaching on personal wellness? 2A",
    "How important is community and social support for recharging outside of work? 2A",
    "What role does flexibility or autonomy play in feeling in control of one's schedule? 2A",
    "What daily or weekly routines help quiet the mind and promote mental calm? 2A",
    "How can setting boundaries help prevent resentment or burnout long term? 2A",
    "What type of self-reflection helps maintain passion and resilience? 2A",

    "How important is open communication despite topic sensitivity for family cohesion? 2B",
    "What role does respect, empathy and validation play in overcoming divides? 2B",
    "When does embracing diversity enhance relationships versus allowing distances? 2B",
    "How can acknowledging multiple perspectives aid compromise over dominance? 2B",
    "What life transitions commonly bring latent issues to the surface within families? 2B",
    "Which family roles most commonly come into question across generations? 2B",
    "How do expectations shift from obedience to independence as children age/marry? 2B",
    "What signs indicate unresolved conflicts negatively impacting overall family bonds? 2B",
    "When might professional counseling help address root causes constructively? 2B",
    "How can families foster continued growth towards more conscious relationships? 2B",

    "How influential are internships, apprenticeships in sampling careers nowadays? 2C",
    "What role does higher education now play compared to previous generations? 2C",
    "How has globalization impacted the types of jobs available locally? 2C",
    "When might further schooling help and when could it hinder career mobility? 2C",
    "What strategies help land interviews and opportunities most effectively currently? 2C",
    "How common/advisable are career switches or job hopping at different stages? 2C",
    "What are some emerging or promising industries on the rise to consider? 2C",
    "How important is cultivating diverse hard and soft skills for long term employability? 2C",
    "What trends or forecasts help inform education/training decisions purposefully? 2C",
    "How do passions, strengths, lifestyle and salary all factor into career satisfaction? 2C",

    "What challenges present when showing love doesn't equal feeling loved? 2D",
    "How does awareness of preferences create better appreciation for diversity? 2D",
    "What life experiences most strongly shape one's love languages? 2D",
    "How can love languages framework foster healthier communication patterns? 2D",
    "How aware are you of others' preferred languages beyond your own? 2D",
    "When have you struggled expressing affection in a way that would be received? 2D",
    "What role models inspire you in how they show care in their own relationships? 2D",
    "How might fostering gratitude help appreciate what you do receive sufficiently? 2D",
    "How could our talks help increase understanding to strengthen our bond? 2D",
    "What growth have you experienced learning about this concept of love languages? 2D",

    "What advice would you both give for maintaining motivation through challenges? 2E",
    "How do your generations differ in talking about feelings and personal struggles? 2E",
    "What could help us feel comfortable discussing mental wellness openly? 2E",
    "How has societal understanding and awareness of these issues changed overtime? 2E",
    "What role does a supportive community or strong relationships play in well-being? 2E",
    "What impact can unrealistic standards from social media have on one's self-esteem? 2E",
    "How are concepts of masculinity or femininity broadening in approach to mental health? 2E",
    "What is the difference between normal mood fluctuations and warning signs needing attention? 2E",
    "How do lifestyle factors like work, social life, exercise influence mental stability? 2E",
    "How can setting emotional boundaries protect well-being in career or relationships? 2E",

    "How might open-minded discussion strengthen bonds despite political differences? 2F",
    "What role does empathy, wisdom and factual data each play in social perspective? 2F",
    "How can addressing root causes aid where reactions feed further divide alone? 2F",
    "When are certain topics best tabled versus discussed to avoid toxicity versus apathy? 2F",
    "How does community shape versus individualize responsibility for positive change? 2F",
    "How do environmental, economic and health-related issues impact communities unitedly? 2F",
    "What actions better future society and what current policies still require improvement? 2F",
    "How do respect, compassion and moral courage overcome fear or complacency? 2F",
    "When do discussions inspire and when might silent support or solutions better serve? 2F",
    "How does embracing diversity aid social belonging, justice and progress ultimately? 2F",

    "How can parents best support youth discovering and coming to terms with identity? 2G",
    "What more do different generations have left to understand about each other? 2G",
    "How can we use our experiences to help remedy ignorance in others? 2G",
    "In what ways can society foster safer and healthier explorations of self? 2G",
    "In what ways has access to information empowered self-awareness and authenticity? 2G",
    "How might social conditions like toxic masculinity hinder self-acceptance? 2G",
    "What role does exposure and familiarity between groups play in normalizing diversity? 2G",
    "How can respect, not just tolerance, become the standard afforded all people? 2G",
    "What can leaders, role models or friends each do to spread inclusion positively? 2G",
    "How do unconditional love and patience help overcome fear or change long-held views? 2G",

    "How might generational changes influence modern approaches to dating? 2H",
    "What role does social media play in youth relationships both positively and negatively? 2H",
    "How important is understanding another's family background in commitment? 2H",
    "When do relationships require balancing alone time versus shared experiences? 2H",
    "What signs indicate being ready for more serious levels of intimacy or partnership? 2H",
    "How can open communication help navigate differences to compromise supportively? 2H",
    "What life lessons or perspectives do longer partnerships provide to relationships? 2H",
    "How might commitment look different to different people based on beliefs or identity? 2H",
    "When does acknowledging irreconcilable contrasts allow relationships to close positively? 2H",
    "How can surrounding communities foster healthier relationship role models overall? 2H",

    "How can understanding better equip all to support versus burden each other's journeys? 2J",
    "When do expectations inspire and when might they deter risks or autonomy necessary? 2J",
    "What signs indicate care for intrinsic drives versus lives projected by external validation? 2J",
    "How can perspective shift from disappointed hopes to pride in each person's self-worth? 2J",
    "When could space for flaws and failure build confidence versus fear and people-pleasing? 2J",
    "How can setting family member's well-being as priority aid accepting life's uncertainties? 2J",
    "What role does empathy, compromise and setting healthy limits each play for balance? 2J",
    "How do conditions of worth impair relationships and when unconditional care liberates? 2J",
    "How can embracing individual paths strengthen bonds beyond roles and superficial goals? 2J",
    "When might counseling provide tools to speak shown but unsaid hopes constructively? 2J",
],
    "3": ["parent What strategies helped you maintain balance while raising a family? 3A",
    "child What career or life stage challenges do you anticipate straining your balance? 3A",

    "parent What values or issues most commonly caused tensions between you and your parents? 3B",
    "child What advice would strengthen your ability to healthily process inner conflicts? 3B",

    "parent How did you decide on your own career path back in your day? 3C",
    "child How can we best assist your navigating opportunities and next steps? 3C",

    "parent How did your parents express care, affection and appreciation for each other? 3D",
    "child What growth have you experienced learning about this concept of love languages? 3D",
    
    "parent What stresses from your generation are different than kids face today? 3E",
    "child What community resources would you recommend if I faced serious issues? 3E",

    "parent What social issues were most prominent during your upbringing? 3F",
    "child How can community participation contribute to causes in safe, meaningful ways? 3F",

    "parent How was sexuality discussed or portrayed in your family as you were growing up? 3G",
    "child How can our relationship help empower you to own your truth authentically? 3G",

    "parent What lessons did you learn about relationships from your own parents/caregivers? 3H",
    "child What advice would help you feel most empowered in your own relationships? 3H",

    "parent What aspirations/dreams did you have for me that may differ from my own now? 3J",
    "child How does interdependence versus feelings of need to repay show true care for growth? 3J",

    ],
    "4": ["What's your favorite way to spend a weekend? 4A", 
    "What's your most used emoji or your emoji personality? 4A",
    "What's the last thing that made you truly laugh out loud? 4A",
    "What's your favorite holiday tradition or memory? 4A",
    "What smells or flavors remind you of home? 4A",

    "What's your favorite kind of book or genre to read? 4B",
    "What's your favorite type of dance and music to dance to? 4B",
    "What's the most daring thing you've ever done? 4B",
    "What's on your bucket list of places to visit? 4B",
    "What's one thing you want to accomplish this year? 4B",   
    
    "What was your dream job as a child? 4C",
    "If you could live anywhere in the world, where would you choose? 4C",
    "What's one thing you collect or are interested in? 4C",
    "What college did you attend or where would you like to attend? 4C",
    "What's your favorite kind of pet? 4C",

    "What did you want to be when you grew up? 4D",
    "What's your favorite outfit that you own? 4D",
    "What's the luckiest thing that's ever happened to you? 4D",
    "What's an interesting fact few people know about you? 4D",
    "What's one of your hidden talents? 4D",

    "What's the best toy you remember from childhood? 4E",
    "What is your favorite childhood memory? 4E",
    "What are you most proud of? 4E",
    "What's your passion or hobby outside of work? 4E",
    "What's the weirdest dream you've ever had? 4E",

    "What's the best concert you've been to? 4F",
    "What's your favorite holiday and how do you celebrate? 4F",
    "What's your favorite thing about your city/town? 4F",
    "What's your favorite ice cream flavor? 4F",
    "What's the last great movie you saw? 4F",
    "What's your favorite kind of cuisine or food? 4F",

    "What was your favorite childhood TV show or movie? 4G",
    "What's the most embarrassing thing that's happened to you? 4G",
    "What's the last compliment you received? 4G",
    "What superpower would you want to have? 4G",
    "What profession other than your own would you like to try? 4G",

    "What's one thing you want to accomplish this year? 4H",
    "What's your middle name? 4H",
    "What's your favorite sport to watch or play? 4H",
    "What's your favorite thing about your job or field of study? 4H",
    "What's your ideal super lazy day look like? 4H",
    "What's the best piece of advice you've ever received? 4H",

    "What's your favorite season and why? 4J",
    "What superpower would you want and what would you do with it? 4J",
    "What was your favorite TV show growing up? 4J",
    "What's your favorite type of music? 4J",
    "What's the best concert you've been to? 4J",
],
};


const selectedButtons = new Set();
const answerContainer = document.getElementById("answer");
const generateButton = document.getElementById("generate");
let currentAnswerIndex = 0;


function updateButton(buttonId) {
    const button = document.getElementById(buttonId);

    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        selectedButtons.delete(buttonId);
    } else {
        // Check if it's a letter button (A-D)
        if (buttonId.match(/[A-J]/)) {
            button.classList.add("selected");
            selectedButtons.add(buttonId);
        } else if (buttonId.match(/[1-4]/)) {
            // Check if it's a number button (1-4) and deselect others
            document.querySelectorAll(".button-group .selected").forEach(selectedButton => {
                if (selectedButton.id.match(/[1-4]/)) {
                    selectedButton.classList.remove("selected");
                    selectedButtons.delete(selectedButton.id);
                }
            });
            button.classList.add("selected");
            selectedButtons.add(buttonId);
        }
    }
}

function toggleAnswerState(button) {
    if (button.classList.contains("disabled")) {
        button.classList.remove("disabled");
    } else {
        button.classList.add("disabled");
    }
}

function generateAnswer() {
    const letterButtons = Array.from(selectedButtons).filter(buttonId => buttonId.match(/[A-J]/));
    const numberButton = Array.from(selectedButtons).find(buttonId => buttonId.match(/[1-4]/));

    if (letterButtons.length > 0 && numberButton) {
        const number = numberButton.charAt(0);
        const matchingAnswers = letterButtons.flatMap(letterButton => {
            const selectedLetter = letterButton.charAt(0);

            // Check if the selected number is "3," "2," "1," or "4"
            if (["3", "2", "1", "4"].includes(number)) {
                return [...states["3"], ...states[number]].filter(answer => answer.includes(selectedLetter));
            } else {
                return states[number].filter(answer => answer.includes(selectedLetter));
            }
        });

        if (matchingAnswers.length > 0) {
            // Clear previous buttons
            answerContainer.innerHTML = '';

            // Create buttons for up to 4 matching answers
            for (let i = 0; i < Math.min(12, matchingAnswers.length); i++) {
                const button = document.createElement('button');
                const answerText = matchingAnswers[i].replace(/\s+\d+[A-J]$/, '');

                // Check if the answer is from const states "3"
                const isFromStates3 = states["3"].includes(matchingAnswers[i]);

                // Split the answer text into words
                const words = answerText.split(' ');

                // Create a new array to store the formatted words
                const formattedWords = words.map((word, index) => {
                    // Make the first word (index 0) bold for the answers from const states "3"
                    if (index === 0 && isFromStates3) {
                        // Wrap the word in a <div> with id for styling
                        return `<div id="bold-word">${word}</div>`;
                    }
                    return word;
                });

                // Join the formatted words back into a single string
                const formattedAnswer = formattedWords.join(' ');

                button.innerHTML = formattedAnswer;
                button.id = `answerbutton${i + 1}`;
                button.addEventListener('click', () => {
                    toggleAnswerState(button);
                });
                answerContainer.appendChild(button);
            }

            // Enable the "Generate" button
            generateButton.disabled = false;
        } else {
            answerContainer.textContent = "No matching answers found.";
        }
    } else {
        answerContainer.textContent = "Please select at least one topic";
    }
}


generateButton.addEventListener("click", () => {
    generateNextAnswer();
});

const usedAnswers = new Set();


function generateNextAnswer() {
    const disabledAnswerButtons = Array.from(document.querySelectorAll(".disabled"));

    if (disabledAnswerButtons.length > 0) {
        const letterButtons = Array.from(selectedButtons).filter(buttonId => buttonId.match(/[A-J]/));
        const numberButton = Array.from(selectedButtons).find(buttonId => buttonId.match(/[1-4]/));
        const number = numberButton.charAt(0);

        // Check if the selected number is "3", "2", "1", or "4"
        if (["3", "2", "1", "4"].includes(number)) {
            // Combine answers from const states["3"] and const states[number]
            const combinedAnswers = [...states["3"], ...states[number]];

            // Filter answers based on the selected letter
            const matchingAnswers = letterButtons.flatMap(letterButton => {
                const selectedLetter = letterButton.charAt(0);
                return combinedAnswers.filter(answer => answer.includes(selectedLetter));
            });

            // Filter out used answers
            const availableAnswers = matchingAnswers.filter(answer => !usedAnswers.has(answer));

            if (availableAnswers.length > 0) {
                disabledAnswerButtons.forEach(button => {
                    // Generate a random index for the next answer
                    const randomIndex = Math.floor(Math.random() * availableAnswers.length);
                    const nextAnswer = availableAnswers[randomIndex];
                    const answerText = nextAnswer.replace(/\s+\d+[A-J]$/, '');

                    // Check if the answer is from const states["3"]
                    const isFromStates3 = states["3"].includes(nextAnswer);

                    // Split the answer text into words
                    const words = answerText.split(' ');

                    // Create a new array to store the formatted words
                    const formattedWords = words.map((word, index) => {
                        if (index === 0 && isFromStates3) {
                            // Wrap the word in a <div> with id for styling
                            return `<div id="bold-word">${word}</div>`;
                        }
                        return word;
                    });

                    // Join the formatted words back into a single string
                    const formattedAnswer = formattedWords.join(' ');

                    button.innerHTML = formattedAnswer;
                    toggleAnswerState(button);

                    // Add the used answer to the set
                    usedAnswers.add(nextAnswer);

                    // Remove the answer from availableAnswers
                    availableAnswers.splice(randomIndex, 1);
                });
            } else {
                // Reset used answers if all answers have been used
                usedAnswers.clear();
                generateNextAnswer();
            }
        }
    }
}



document.querySelectorAll(".button-group button").forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.id;
        updateButton(buttonId);
    });
});



document.getElementById("submit").addEventListener("click", generateAnswer);

////dhbvs

const draggableButtons = document.querySelectorAll('.button-group button');
const bgImage = document.getElementById('bg'); // Get the img element with the ID "bg"



draggableButtons.forEach((element) => {
element.addEventListener('mousedown', (event) => {
z++;
element.style.zIndex = z;

let startX = event.clientX;
let startY = event.clientY;

let startLeft = parseFloat(getComputedStyle(element).left);
let startTop = parseFloat(getComputedStyle(element).top);

const onMouseMove = (e) => {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    element.style.left = startLeft + deltaX + 'px';
    element.style.top = startTop + deltaY + 'px';

    // Check for overlap with other elements
    const rectImg = bgImage.getBoundingClientRect();
    const rectElement = element.getBoundingClientRect();

    const overlapX = Math.max(0, Math.min(rectImg.right, rectElement.right) - Math.max(rectImg.left, rectElement.left));
    const overlapY = Math.max(0, Math.min(rectImg.bottom, rectElement.bottom) - Math.max(rectImg.top, rectElement.top));

    if (overlapX > 0 && overlapY > 0) {
        element.classList.add('selected');
        // There is an overlap, change the filter style of the img element
        bgImage.style.filter = 'contrast(1) saturate(1.1) brightness(1.1) drop-shadow(5px 5px 15px white)';
        // Change the text color of the draggableButtons
    } else {
        // No overlap, revert the filter style and text color
        bgImage.style.filter = '';
        element.style.color = '';
        element.classList.remove('selected');
    }
};

const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});
element.addEventListener('dragstart', event => {
event.preventDefault(); // Prevent the default drag-and-drop behavior
});
});
