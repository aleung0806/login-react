const useUserQuery = () => {
    return useUserQuery('loggedInUser', authService.auth)
}
