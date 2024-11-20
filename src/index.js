export default class ErrorRepository {
    constructor(){
        this.errors = new Map([
            [401, 'Доступен только авторизованным пользователям'],
            [403, 'Доступ запрещён'],
            [404, 'Страница не найдена'],
            [403, 'У вас нет прав для просмотра содержимого'],
            [500, 'Невозможно выполнить команду'],
        ]);
    }
    translate(code){
        return this.errors.get(code) || "Неизвестная ошибка";
    }
}

