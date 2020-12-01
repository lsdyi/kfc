<template>
  <header>
		<Icon />
		<Search />
		<Links />
		
		
  </header>
</template>

<script>
import Icon from './Icon'
import Links from './Links'
import Search from './Search'
export default {
	name: "Header",

	components: {
		Icon,
		Links,
		Search
	}
}
</script>

<style>

header {
	height: 100px;
}
</style>