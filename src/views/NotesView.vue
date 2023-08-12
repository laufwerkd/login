<script setup>
import { ref, reactive } from 'vue';
import { useNoteStore } from '../stores/note';

import CreateButton from '@/components/CreateButton.vue';
import Note from '@/components/Note.vue';
import ColorButton from '@/components/ColorButton.vue';

const noteStore = useNoteStore();

const colors = reactive({
	"light": "var(--light)",
	"red": "#ffb3ba",
	"orange": "#ffdfba",
	"yellow": "#ffffba",
	"green": "#baffc9",
	"blue": "#bae1ff",
})

let currentColor = ref(null);

</script>

<template>
	<div class="notesView">
		<aside>
			<CreateButton @click="noteStore.createNote(currentColor)" class="createButton"/>
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.light" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.red" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.orange" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.yellow" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.green" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.blue" />
		</aside>
		<main>
			<h1 class="title">Notizen</h1>
			<div class="notes">
				<Note class="note" v-for="note in noteStore.notes" :key="note.id" :note="note" />
				<span v-if="Object.keys(noteStore.notes).length <= 0">Click + to add a note</span>
			</div>
		</main>
	</div>
</template>

<style scoped>
.notesView {
	padding-top: 64px;
	display: flex;
}

aside {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
}

main {
	padding-left: 64px;
}

.notes {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 16px;
}

.createButton {
	margin-bottom: 16px;
}

.title {
	margin-bottom: 64px;
	font-weight: 500;
}
</style>
