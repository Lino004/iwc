<template>
  <div>
    <subtitle subtitle="PERSONAL INFORMATION"></subtitle>
    <div class="py-16">
      <form class="grid grid-cols-2 grid-flow-row gap-x-20 gap-y-5">
        <div class="col-span-2 md:col-span-1 grid grid-cols-4 gap-4">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            class="input-about col-span-3"
          />
          <input
            type="text"
            id="initials"
            placeholder="Initials"
            class="input-about"
          />
        </div>

        <div class="col-span-2 md:col-span-1 grid grid-cols-4 gap-4">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            class="input-about col-span-3"
          />

          <select
            name="suffix"
            id="suffix"
            placeholder="Suffix"
            class="input-about select-chevron">
            <option value="">Suffix</option>
          </select>
        </div>

        <input
          type="text"
          id="specialization"
          placeholder="Specialization (if applicable)"
          class="col-span-2 md:col-span-1 input-about"
        />

        <div class="hidden md:block"></div>

        <input
          type="text"
          id="prcnumber"
          placeholder="PRC Number"
          class="col-span-2 md:col-span-1 input-about"
        />

        <div class="flex items-end">
          <input
            type="file"
            accept="image/*"
            ref="fileImage"
            class="hidden">
          <a
            class="text-lg underline cursor-pointer"
            @click="$refs.fileImage.click()">
            Upload image...
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
