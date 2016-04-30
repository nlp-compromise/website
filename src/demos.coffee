module.exports={
  pos:
    title:'Part-of-Speech Tagging',
    square:
      from:"walk the walk",
      to:"[Verb], [Determiner], [Noun]"
    code: 'nlp.text(\'\').tags()'
    about: 'assigns the particular grammars for each term'

  sentences:
    title:'Sentence tokenization'
    square:
      from:"Dr. H. Cool. is 45. He weighs 4.5lb."
      to:"[Sentence],  [Sentence]"
    id:"sentences"
    code: 'nlp.text(\'\').sentences'
    about: 'chops text into sentences'

  conjugation:
    title:'Verb conjugation'
    square:
      from:"swim"
      to:"swimming, swims, swam, swimmer.."
    code: 'nlp.verb(\'\').conjugate()'
    about: 'convert the tense and plurality of a verb'

  inflection:
    title:'Noun pluralization'
    square:
      from:"bear"
      to:"bears"
    code: 'nlp.noun(\'\').pluralize()'
    about: 'inflect nouns to plural where possible'

  negation:
    title:'Negation'
    square:
      from:"I spoke with everybody."
      to:"I didn't speak with everybody."
    code: 'nlp.sentence(\'\').negate()'
    about: 'turn a sentence into it\s opposite meaning'

  number:
    title:'Number Parsing'
    square:
      from:"seven hundred and fifty-four"
      to:"754"
    code: 'nlp.value(\'\').number'
    about: 'interpret texual numbers'

  match:
    title:'RegEx Matching'
    square:
      from:"she [PresentTense] [Noun]"
      to:"she sells seashells"
    code: 'nlp.text(\'\').match(\'\')'
    about: 'regex-like sytax for finding matches in text'
  locale:
    title:'US/UK localization'
    square:
      from:"my favourite colours"
      to:"my favorite color"
    code: 'nlp.text(\'\').toAmerican()'
    about: 'translate british and american spelling idioms'

  syllable:
    title:'Syllables'
    square:
      from:"houston texas"
      to:"'hous', 'ton', 'tex', 'as'"
    code: 'nlp.text(\'\').syllables()'
    about: 'interpret pronouciation as spelling-faithful syllables'
}
