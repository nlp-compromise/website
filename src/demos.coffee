module.exports=[
  {
    title:'Part-of-Speech Tagging',
    square:
      from:"walk the walk",
      to:"[Verb], [Determiner], [Noun]"
    id:"pos"
    code: 'nlp.text(\'\').tags()'
    about: 'assigns the particular grammars for each term'
  },
  {
    title:'Sentence tokenization'
    square:
      from:"Dr. H. Cool. is 45. He weighs 4.5lb."
      to:"[Sentence],  [Sentence]"
    id:"sentences"
    code: 'nlp.text(\'\').sentences'
    about: 'chops text into sentences'
  },
  {
    title:'Verb conjugation'
    square:
      from:"swim"
      to:"swimming, swims, swam, swimmer.."
    id:"conjugation"
    code: 'nlp.verb(\'\').conjugate()'
    about: 'convert the tense and plurality of a verb'
  },
  {
    title:'Noun pluralization'
    square:
      from:"bear"
      to:"bears"
    id:"inflection"
    code: 'nlp.noun(\'\').pluralize()'
    about: 'inflect nouns to plural where possible'
  },
  {
    title:'Negation'
    square:
      from:"I spoke with everybody."
      to:"I didn't speak with everybody."
    id:"negation"
    code: 'nlp.sentence(\'\').negate()'
    about: 'turn a sentence into it\s opposite meaning'
  },
  {
    title:'Number Parsing'
    square:
      from:"seven hundred and fifty-four"
      to:"754"
    id:"number"
    code: 'nlp.value(\'\').number'
    about: 'interpret texual numbers'
  },
  {
    title:'RegEx Matching'
    square:
      from:"she [PresentTense] [Noun]"
      to:"she sells seashells"
    id:"match"
    code: 'nlp.text(\'\').match(\'\')'
    about: 'regex-like sytax for finding matches in text'
  },
  {
    title:'US/UK localization'
    square:
      from:"my favourite colours"
      to:"my favorite color"
    id:"locale"
    code: 'nlp.text(\'\').toAmerican()'
    about: 'translate british and american spelling idioms'
  },
  {
    title:'Syllables'
    square:
      from:"houston texas"
      to:"'hous', 'ton', 'tex', 'as'"
    id:"syllable"
    code: 'nlp.text(\'\').syllables()'
    about: 'interpret pronouciation as spelling-faithful syllables'
  },
]
