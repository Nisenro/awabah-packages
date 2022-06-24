module.exports = function (match) {
    const project =  {
        $project: {
            password: 0,
            referrals: 0,
            referralCode: 0,
            account: 0,
            bvn: 0,
            microPension: 0,
            __v: 0,
            'profile.addedBy.profile': 0,
            'profile.addedBy._id': 0,
            'profile.addedBy.referrals': 0,
            'profile.addedBy.email': 0,
            'profile.addedBy.phoneNumber': 0,
            'profile.addedBy.verificationToken': 0,
            'profile.addedBy.verificationTokenExpires': 0,
            'profile.addedBy.referralCode': 0,
            'profile.addedBy.account': 0,
            'profile.addedBy.bvn': 0,
            'profile.addedBy.microPension': 0,
            'profile.addedBy.password': 0,
            'profile.addedBy.createdAt': 0,
            'profile.addedBy.updatedAt': 0,
            'profile.addedBy.__v': 0,
            'profile.addedBy.bvnVerified': 0,
            'profile.addedBy.ninVerified': 0,
            'profile.addedBy.verificationStatus': 0,
            'profile.addedBy.usersAdded': 0,
            'profile.user': 0,
            'profile.createdAt': 0,
            'profile.updatedAt': 0,
            'profile.__v': 0,
            'profile.accountDetail._id': 0,
            'profile.accountDetail.customer': 0,
            'profile.accountDetail.__v': 0,
            'profile.userLocation.__v': 0,
            'profile.userLocation.agents': 0,
            'profile.userLocation.addedBy': 0,
            'profile.location': 0,
        },
    };
    return [
        { $match: match },
        {
            $lookup: {
                from: 'profiles',
                as: 'profile',
                localField: 'profile',
                foreignField: '_id',
                pipeline: [
                    {
                        $lookup: {
                            from: 'users',
                            as: 'usersAdded',
                            localField: '_id',
                            foreignField: '_id',
                        },
                    },
                ],
            },
        },
        { $unwind: '$profile' },
        {
            $sort: {
                createdAt: -1,
            },
        },
        project,
    ];
}