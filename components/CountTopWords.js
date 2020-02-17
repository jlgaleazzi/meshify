const commonWords = {};

const CountTopWords = (tweets,num=20) => {
	const topWords = [];
	const cleaned = tweets.map((tweet => {
		return removeStopWords(tweet.full_text);
	}));
   

	
	let sortable = [];
	for (let word in commonWords) {
		sortable.push({[word] : commonWords[word]})
	}
	
	const sorted = sortable.sort(function(a,b) {
		let counta = Object.values(a);
		let countb = Object.values(b);
		return countb - counta;
	})
	for (let i=0; i < num;i++) {
		topWords.push(sorted[i]);
	}
	
   return (topWords);
}

const removeStopWords = (source) => {
	const cleaned = source.match(/[^\s]+|\s+[^\s+]$/g);

	for (let i = 0; i < cleaned.length;i++) {
		let word = cleaned[i].toLowerCase();
	
		if (stopWords.indexOf(word) === -1) {
			if (commonWords[word] === undefined) {
				commonWords[word] = 1;
			} else
			{
				commonWords[word] ++;
			}
		}
	}
	return commonWords
}


const stopWords = [
	'-',
	'â»',
	'a',
	'&amp;',
	'about',
	'above',
	'across',
	'after',
	'again',
	'against',
	'all',
	'almost',
	'alone',
	'along',
	'already',
	'also',
	'although',
	'always',
	'among',
	'an',
	'and',
	'another',
	'any',
	'anybody',
	'anyone',
	'anything',
	'anywhere',
	'are',
	'area',
	'areas',
	'around',
	'as',
	'ask',
	'asked',
	'asking',
	'asks',
	'at',
	'away',
	'b',
	'back',
	'backed',
	'backing',
	'backs',
	'be',
	'became',
	'because',
	'become',
	'becomes',
	'been',
	'before',
	'began',
	'behind',
	'being',
	'beings',
	'best',
	'better',
	'between',
	'big',
	'both',
	'but',
	'by',
	'c',
	'came',
	'can',
	'cannot',
	'case',
	'cases',
	'certain',
	'certainly',
	'clear',
	'clearly',
	'come',
	'could',
	'd',
	'did',
	'differ',
	'different',
	'differently',
	'do',
	'does',
	'done',
	'down',
	'down',
	'downed',
	'downing',
	'downs',
	'during',
	'e',
	'each',
	'early',
	'either',
	'end',
	'ended',
	'ending',
	'ends',
	'enough',
	'even',
	'evenly',
	'ever',
	'every',
	'everybody',
	'everyone',
	'everything',
	'everywhere',
	'f',
	'face',
	'faces',
	'fact',
	'facts',
	'far',
	'felt',
	'few',
	'find',
	'finds',
	'first',
	'for',
	'four',
	'from',
	'full',
	'fully',
	'further',
	'furthered',
	'furthering',
	'furthers',
	'g',
	'gave',
	'general',
	'generally',
	'get',
	'gets',
	'give',
	'given',
	'gives',
	'go',
	'going',
	'good',
	'goods',
	'got',
	'great',
	'greater',
	'greatest',
	'group',
	'grouped',
	'grouping',
	'groups',
	'h',
	'had',
	'has',
	'have',
	'having',
	'he',
	'her',
	'here',
	'herself',
	'high',
	'high',
	'high',
	'higher',
	'highest',
	'him',
	'himself',
	'his',
	'how',
	'however',
	'i',
	'if',
	'important',
	'in',
	'interest',
	'interested',
	'interesting',
	'interests',
	'into',
	'is',
	'it',
	'its',
	'itself',
	'j',
	'just',
	'k',
	'keep',
	'keeps',
	'kind',
	'knew',
	'know',
	'known',
	'knows',
	'l',
	'large',
	'largely',
	'last',
	'later',
	'latest',
	'least',
	'less',
	'let',
	'lets',
	'like',
	'likely',
	'long',
	'longer',
	'longest',
	'm',
	'made',
	'make',
	'making',
	'man',
	'many',
	'may',
	'me',
	'member',
	'members',
	'men',
	'might',
	'more',
	'most',
	'mostly',
	'mr',
	'mrs',
	'much',
	'must',
	'my',
	'myself',
	'n',
	'necessary',
	'need',
	'needed',
	'needing',
	'needs',
	'never',
	'new',
	'new',
	'newer',
	'newest',
	'next',
	'no',
	'nobody',
	'non',
	'noone',
	'not',
	'nothing',
	'now',
	'nowhere',
	'number',
	'numbers',
	'o',
	'of',
	'off',
	'often',
	'old',
	'older',
	'oldest',
	'on',
	'once',
	'one',
	'only',
	'open',
	'opened',
	'opening',
	'opens',
	'or',
	'order',
	'ordered',
	'ordering',
	'orders',
	'other',
	'others',
	'our',
	'out',
	'over',
	'p',
	'part',
	'parted',
	'parting',
	'parts',
	'per',
	'perhaps',
	'place',
	'places',
	'point',
	'pointed',
	'pointing',
	'points',
	'possible',
	'present',
	'presented',
	'presenting',
	'presents',
	'problem',
	'problems',
	'put',
	'puts',
	'q',
	'quite',
	'r',
	'rather',
	'really',
	'right',
	'right',
	'room',
	'rooms',
	's',
	'said',
	'same',
	'saw',
	'say',
	'says',
	'second',
	'seconds',
	'see',
	'seem',
	'seemed',
	'seeming',
	'seems',
	'sees',
	'several',
	'shall',
	'she',
	'should',
	'show',
	'showed',
	'showing',
	'shows',
	'side',
	'sides',
	'since',
	'small',
	'smaller',
	'smallest',
	'so',
	'some',
	'somebody',
	'someone',
	'something',
	'somewhere',
	'state',
	'states',
	'still',
	'still',
	'such',
	'sure',
	't',
	'take',
	'taken',
	'than',
	'that',
	'the',
	'their',
	'them',
	'then',
	'there',
	'therefore',
	'these',
	'they',
	'thing',
	'things',
	'think',
	'thinks',
	'this',
	'those',
	'though',
	'thought',
	'thoughts',
	'three',
	'through',
	'thus',
	'to',
	'today',
	'together',
	'too',
	'took',
	'toward',
	'turn',
	'turned',
	'turning',
	'turns',
	'two',
	'u',
	'under',
	'until',
	'up',
	'upon',
	'us',
	'use',
	'used',
	'uses',
	'v',
	'very',
	'w',
	'want',
	'wanted',
	'wanting',
	'wants',
	'was',
	'way',
	'ways',
	'we',
	'well',
	'wells',
	'went',
	'were',
	'what',
	'when',
	'where',
	'whether',
	'which',
	'while',
	'who',
	'whole',
	'whose',
	'why',
	'will',
	'with',
	'within',
	'without',
	'work',
	'worked',
	'working',
	'works',
	'would',
	'x',
	'y',
	'year',
	'years',
	'yet',
	'you',
	'young',
	'younger',
	'youngest',
	'your',
	'yours',
	'z'
]

export default CountTopWords;