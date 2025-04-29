<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-table :items="items"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      items: [
        { age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
          _cellVariants: { age: 'warning', first_name: 'primary', last_name: 'dark' }
        },
        { age: 21,
          first_name: 'Larsen',
          last_name: 'Shaw',
          _cellVariants: { age: 'success', first_name: 'info', last_name: 'secondary' }
        },
        { age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          _rowVariant: 'danger'
        },
        { age: 40,
          first_name: 'Thor',
          last_name: 'MacDonald',
          _cellVariants: { age: 'warning', first_name: 'primary', last_name: 'dark' }
        },
        { age: 29,
          first_name: 'Dick',
          last_name: 'Dunlap',
          _cellVariants: { age: 'success', first_name: 'info', last_name: 'secondary' }
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>