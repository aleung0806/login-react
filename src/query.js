const useUserQuery = () => {
    return useUserQuery('loggedInUser', authService.verify)
}
