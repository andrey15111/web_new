<template>
  <main>
    <section class="login-form text-bold">
      <h1>Авторизация</h1>
      <form>
        <div class="input-container">
          <input class="form-email" type="text" name="login" placeholder="Введите Email">
          <div class="errors email-error"> </div>
        </div>
        <div class="input-container">
          <input type="password" name="password" placeholder="Введите пароль">
        </div>
        <div class="input-container">
          <button type="button" class="btn btn-warning">Войти</button>
        </div>
        <div class="input-container">
          <h6><a href="">Забыли пароль?</a></h6>
          <h6><router-link to="/reg">Зарегистрироваться</router-link></h6>
        </div>

      </form>
    </section>
  </main>
</template>
