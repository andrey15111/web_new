<template>
  <main>
    <section class="login-form fw-bold">
      <h1>Регистрация</h1>
      <form>
        <div class="input-container">
          <input type="text" name="login" placeholder="Имя">
        </div>
        <div class="input-container">
          <input type="text" name="login" placeholder="Email">
        </div>
        <div class="input-container">
          <input type="password" name="password" placeholder="Пароль">
        </div>
        <div class="input-container">
          <h4>Выберите пол:</h4>
        </div>
        <select class="input-container">
          <option value=”gender”>Мужской</option>
          <option value=”gender”>Женский</option>
        </select>
        <div class="input-container">
          <button type="button" class="btn btn-warning">Зарегистрироваться</button>
        </div>
      </form>
    </section>
  </main>
</template>