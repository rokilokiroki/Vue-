<template>
    <div>
        <h1>じゃんけん…</h1>
        <select v-model="selected" @change="translatedJapanese">
            <option v-for="z in zyankenn" v-bind:value="z.value">
                {{ z.text }}
            </option>
        </select>
        <span>あなたが選んだのは...{{ selectedJapanese }}</span>
        <p>
            <button @click="start">ポンッ…</button>
        </p>
        <p>
            {{  }}
        </p>
    </div>
</template>
<script>
  export default {
    data() {
        const zyankenn = [
            {
                'value': 'rock',
                'text': 'グー',
                'win': 'scissors',
                'lose': 'paper'
            }, {
                'value': 'paper',
                'text': 'パー',
                'win': 'rock',
                'lose': 'scissors'
            }, {
                'value': 'scissors',
                'text': 'チョキ',
                'win': 'paper',
                'lose': 'rock'
            }
        ];
        return {
            selected: 'rock',
            zyankenn: zyankenn,
            selectedJapanese: 'グー',
            victoryWay: '',
            loseWay: '',
            enemy_answer: ''
        }
    },
    methods: {
        start () {
            this.getVictoryWay()
            this.getLoseWay()
            this.decisionEnemyAnswer()
            if (this.victoryWay === this.enemy_answer) {
                console.log('勝ち')
                this.$emit('win', '勝ち')
            } else if (this.loseWay === this.enemy_answer) {
                console.log('負け')
                this.$emit('lose', '負け')
            } else {
                this.$emit('draw', 'あいこ')
            }
        },
        translatedJapanese() {
            for (let i = 0; i < this.zyankenn.length; i++) {
                if (this.zyankenn[i].value == this.selected) {
                    this.selectedJapanese = this.zyankenn[i].text
                }
            }
            return this.selectedJapanese
        },
        getVictoryWay() {
            for (let i = 0; i < this.zyankenn.length; i++) {
                if (this.zyankenn[i].value == this.selected) {
                    this.victoryWay = this.zyankenn[i].win
                }
            }
            return this.selectedJapanese
        },
        getLoseWay() {
            for (let i = 0; i < this.zyankenn.length; i++) {
                if (this.zyankenn[i].value == this.selected) {
                    this.loseWay = this.zyankenn[i].lose
                }
            }
            return this.selectedJapanese
        },
        decisionEnemyAnswer() {
            this.enemy_answer = this.zyankenn[Math.floor(Math.random() * this.zyankenn.length)].value
            return this.enemy_answer
        }
    }
    // computed: {
    //     answer: function() {
    //         console.log(this.decisionAnswer)
    //         return this.decisionAnswer
    //     }
    // }
  }
</script>