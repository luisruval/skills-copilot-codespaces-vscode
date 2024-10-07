function skilllsMember() {
    console.log('skilllsMember');
    return {
        restrict: 'E',
        templateUrl: 'app/skills/skills-member.html',
        controller: 'skilllsMemberController',
        controlerAs: 'vm',
        bintToController: true,
        scope:  {
            member: '='
        }
        
    };
}
