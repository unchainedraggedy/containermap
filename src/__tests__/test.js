import ErrorRepository from "../index";

test('интерпретация ошибки 404', () => {
    const error = new ErrorRepository();
    expect(error.translate(401)).toBe('Доступен только авторизованным пользователям')
});

test('интерптретация несуществующей ошибки', () => {
    const error = new ErrorRepository();
    expect(error.translate(900)).toBe('Неизвестная ошибка')
})
