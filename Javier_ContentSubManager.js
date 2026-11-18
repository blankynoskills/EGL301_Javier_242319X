
let subscribers = [
    { userId: 101, username: "Darren", tier: "Basic", rewardPoints: 150, monthsRemaining: 1 },
    { userId: 102, username: "Owen", tier: "Premium", rewardPoints: 500, monthsRemaining: 12 },
    { userId: 103, username: "Javier", tier: "Free", rewardPoints: 670, monthsRemaining: 0 },
    { userId: 104, username: "Wenxin", tier: "VIP", rewardPoints: 800, monthsRemaining: 24 }
];

// 1. Add a new subscriber

function addSubscriber(userId, username, tier, months) {
    try {
        const existingUser = subscribers.find(sub => sub.userId === userId);
        if (existingUser) {
            throw new Error("User ID already exists in the system.");
        }
        
        const newSub = {
            userId: userId,
            username: username,
            tier: tier,
            rewardPoints: 0,
            monthsRemaining: months
        };
        
        subscribers.push(newSub);
        return `Successfully added ${username} at the ${tier} tier for ${months} months.`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// 2. Update a user's tier

function updateUserTier(userId, newTier) {
    try {
        const user = subscribers.find(sub => sub.userId === userId);
        if (!user) {
            throw new Error("Subscriber not found.");
        }

        const oldTier = user.tier;
        user.tier = newTier;
        return `User ${userId} upgraded from ${oldTier} to ${newTier}.`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// 3. Verify tier access rights
function verifyTierAccess(userId, requiredTier) {
    const user = subscribers.find(sub => sub.userId === userId);
    if (!user) {
        return false; 
    }
    
    
    const tierLevels = { "Free": 1, "Basic": 2, "Premium": 3, "VIP": 4 };
    
    
    const userLevel = tierLevels[user.tier] !== undefined ? tierLevels[user.tier] : 0;
    const requiredLevel = tierLevels[requiredTier] !== undefined ? tierLevels[requiredTier] : 0;
    
    return userLevel >= requiredLevel;
}

// 4. Process billing cycle
function processBillingCycle() {
    let expiredAccounts = [];
    
    subscribers.forEach(user => {
        
        user.monthsRemaining = user.monthsRemaining - 1;
        
        if (user.monthsRemaining <= 0) {
            expiredAccounts.push(user.userId);
            user.tier = "Free"; 
        }
    });
    
    return `Billing cycle processed. ${expiredAccounts.length} accounts expired and were downgraded to Free.`;
}

// 5. Add reward points to a subscriber's account
function addRewardPoints(userId, points) {
    try {
        const user = subscribers.find(sub => sub.userId === userId);
        if (!user) {
            throw new Error("Subscriber not found.");
        }

        
        user.rewardPoints = user.rewardPoints + points;
        return `Added ${points} points. Total points for ${user.username}: ${user.rewardPoints}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// 6. Remove a subscriber from the database
function removeSubscriber(userId) {
    const initialLength = subscribers.length;
    subscribers = subscribers.filter(sub => sub.userId !== userId);
    
    if (subscribers.length < initialLength) {
        return `Subscriber ID ${userId} has been removed from the system.`;
    } else {
        return `Subscriber ID ${userId} not found.`;
    }
}


module.exports = {
    addSubscriber,
    updateUserTier,
    verifyTierAccess,
    processBillingCycle,
    addRewardPoints,
    removeSubscriber
};