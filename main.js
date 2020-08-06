﻿const app = new Vue({
  el: "#app",
  data: {
    word: "Балашиха",
    dict: [
{q: "Так в старину называли сторожа городских ворот", a: "Вратарь"},
{q: "Железная дорога с канатной тягой, устраиваемая на крутых подьемах", a: "Фуникулер"},
{q: "Анисовая настойка или ликер", a: "Абсент"},
{q: "Что мексиканцы изготовляли из волокнистой древесины кактусов", a: "Воротник"},
{q: "Какое животное дало название распространенному в Древнем Риме способу боевого построения?", a: "Черепаха"},
{q: "Цитрусовое дерево с ароматными цветками", a: "Бергамот"},
{q: "Название этого растения произошло от греческого «порождающий чистоту»", a: "Баклажан"},
{q: "Эта птица может летать спиной вперед", a: "Колибри"},
{q: "Бедный, неказистый домишко, избенка", a: "Хибара"},
{q: "В метро этого города для того, чтобы играть в переходах, нужно еще получить специальную лицензию", a: "Торонто"},
{q: "Овощ, чьи полезные вещества используют для борьбы с подагрой", a: "Кабачок"},
{q: "Зная это, мы можем понять, как работает устройство", a: "Структура"},
{q: "У этих животных, считающихся в некоторых странах деликатесом, зубы расположены на языке", a: "Улитка"},
{q: "В Чили находится самое крупное сооружение подобного типа. Его длина – 1 километр.", a: "Бассейн"},
{q: "Впервые этот вид тропической птицы был открыт в 1758 году Карлом Линнеем. Их песни можно услышать перед грозой или началом муссонов", a: "Павлин"},
{q: "Белый нагрудник на мужской сорочке", a: "Манишка"},
{q: "Одно из первых изображений этого полезного устройства найдено в пещере белее 10000 лет назад", a: "Стремянка"},
{q: "Что изготавливал в старину скудельник?", a: "Кувшин"},
{q: "Единственное ядовитое млекопитающее в мире", a: "Утконос"},
{q: "По одной из версий, название этой страны с одного из древних языков можно перевести как берег кроликов", a: "Испания"},
{q: "Этот праздник посвящен мученику и судя по всему справедливо, с учетом того, сколько денег тратят в этот день", a: "Валентин"},
{q: "Это вкусное изделие появилось в средневековой Германии, а приобрело современный вид в начале 19 века", a: "Сосиска"},
{q: "Это оружие применялось для охоты на волков и лис. При таком способе охоты необходимо было нанести удар по носу зверя", a: "Нагайка"},
{q: "Какая трава была названа индейцами «следом белого человека»", a: "Подорожник"},
{q: "В этом языке нет слов «да» и «нет», а согласие или несогласие выражается полными предложениями", a: "Шотландский"},
{q: "И болезнь, и камень", a: "Нефрит"},
{q: "В старой русской деревне небольшой узкий участок пахотной земли", a: "Полоса"},
{q: "В производстве продукции это лицо, связанное с другим", a: "Смежник"},
{q: "До 2 половины 19 века так иногда называли крупные гравюры агитационного характера", a: "Плакат"},
{q: "Лучший учитель по Бальзаку", a: "Несчастье"},
{q: "Противовес «естественного отбора», созданный человеком", a: "Селекция"},
{q: "Что считается самой распространенной в мире незаразной болезнью", a: "Кариес"},
{q: "Легкая загородная постройка с верандой, распространенная в тропических странах", a: "Бунгало"},
{q: "Предмет, совершенно не интересующий свиней", a: "Бисер"},
{q: "Кто по мнению китайского литератора и философа Джан Джао, не является не добрый и не злой?", a: "Мудрец"},
{q: "Спортивный снаряд для физических упражнений взрослых и детей", a: "Скакалка"},
{q: "Головной убор 17 века, пришедший на смену широкополой шляпе, как более практичный для переноса оружия на плече", a: "Треуголка"},
{q: "Приспособление для массового производства граффити", a: "Трафарет"},
{q: "Живопись по сырой штукатурке водяными красками", a: "Фреска"},
{q: "Что в переводе с древнегреческого языка означает слово Георгий", a: "Земледелец"},
{q: "О чем бестактно расспрашивать австралийца", a: "Предок"},
{q: "Что проводит звук в десять раз быстрее воздуха", a: "Гранит"},
{q: "Участник музыкального коллектива", a: "Вокалист"},
{q: "С японского это слово переводится как «Божественный ветер»", a: "Камикадзе"},
{q: "Как называлась раньше карточная масть пики", a: "Лопата"},
{q: "Широко распространенный вид декоративно прикладного искусства", a: "Вышивание"},
{q: "Лучший способ демонстрации", a: "Пример"},
{q: "Один из самых распространенных персонажей в истории русской игрушки", a: "Полкан"},
{q: "Эта сказочная героиня была описана в греческой истории под именем Родопис", a: "Золушка"},
{q: "Кто спит на спине, согласно мнению китайских мудрецов", a: "Святой"},
{q: "В переносном смысле сумасшедший дом, хаос, неразбериха", a: "Бедлам"},
{q: "Какой музыкальный инструмент имеет голову, гребень, натянутый обруч и подлокотник", a: "Банджо"},
{q: "Кто спит на животе, согласно мнению Китайских мудрецов", a: "Грешник"},
{q: "Минута смеха так же полезна, как один килограмм … чего?", a: "Морковь"},
{q: "Геометрический термин, широко используемый в характеристике современной техники", a: "Диагональ"},
{q: "Что запрещалось носить в Царско Сельском лицее?", a: "Очки"},
{q: "Детеныши этого животного приобретают пол в зависимости от температуры окружающей среды", a: "Крокодил"},
{q: "Этот недуг не позволил Илье Репину в преклонном возрасте исправить свою знаменитую картину Иван Грозный и сын его Иван", a: "Дальтонизм"},
{q: "Изначально это слово обозначало человека, непригодного к военной службе", a: "Негодяй"},
{q: "Это красивое растение на Руси называли «одолень трава»", a: "Кувшинка"},],
    randomWord: {q: "", a: ""},
    keyboard: ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", 
"л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", 
"щ", "ъ", "ы", "ь", "э", "ю", "я"],
    guessed: [],
  },
  computed: {
    letters() {
      let letters = [];
      for(let n of this.word) {
        let founded = false;
        for (let x of this.guessed) {
          if (x === n.toLowerCase()) {
            letters.push(n);
            founded = true;
            continue;
          }
        }
        if (!founded) letters.push("")
      }
      return letters;
    },
  },
  methods: {
    click(n) {
      for (let x of this.guessed) {
        if (x == n) {
          return
        }
      }
      this.guessed.push(n)
    },
    isInGuessed(n) {
      for (let x of this.guessed) {
        if (x === n.toLowerCase()) {
          return true;
        }
      }
      return false;
    },
    reset() {
    this.randomWord = this.dict[Math.floor(Math.random()*this.dict.length)]
    this.word = this.randomWord.a
    this.guessed = []
    }
  },
  created() {
    this.randomWord = this.dict[Math.floor(Math.random()*this.dict.length)]
    this.word = this.randomWord.a
  },
})
